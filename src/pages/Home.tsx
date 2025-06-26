
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import TrainingMandateSection from '@/components/home/TrainingMandateSection';
import PlatformSection from '@/components/home/PlatformSection';
import TrainingPreviewSection from '@/components/home/TrainingPreviewSection';
import CustomerTestimonialsSection from '@/components/home/CustomerTestimonialsSection';
import FinalCTASection from '@/components/home/FinalCTASection';

const Home = () => {
  const { visibleSections, counters } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-[#0B0E16] text-white">
      <HeroSection />
      
      <ProblemSection 
        isVisible={visibleSections.has('problem')} 
        counters={counters} 
      />
      
      <TrainingMandateSection 
        isVisible={visibleSections.has('training-mandate')} 
        counters={counters} 
      />
      
      <PlatformSection 
        isVisible={visibleSections.has('platform')} 
        counters={counters} 
      />
      
      <TrainingPreviewSection 
        isVisible={visibleSections.has('training')} 
        counters={counters} 
      />
      
      <CustomerTestimonialsSection />
      
      <FinalCTASection />
    </div>
  );
};

export default Home;
