
import { useEffect, useState } from 'react';

export const useIntersectionObserver = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [counters, setCounters] = useState({ fines: 0, savings: 0, satisfaction: 0, literacy: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    // Animate counters
    const animateCounter = (target: number, key: keyof typeof counters, duration: number = 2000) => {
      const start = Date.now();
      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        
        setCounters(prev => ({ ...prev, [key]: current }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    // Start counter animations when problem section is visible
    const problemSection = document.querySelector('[data-section="problem"]');
    if (problemSection) {
      const problemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(30, 'fines');
              animateCounter(80, 'savings');
              animateCounter(96, 'satisfaction');
              animateCounter(15, 'literacy');
              problemObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      problemObserver.observe(problemSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { visibleSections, counters };
};
