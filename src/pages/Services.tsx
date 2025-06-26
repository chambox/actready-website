
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Users, FileText, Shield, Target, Zap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeWeek, setActiveWeek] = useState(0);
  
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

    return () => observer.disconnect();
  }, []);

  const engagementWeeks = [
    {
      week: 1,
      theme: 'Kick-off & Intake',
      activities: '1-hr stakeholder kick-off, collect AI use-case docs.',
      deliverables: 'Project brief & requirements matrix.',
      icon: Calendar
    },
    {
      week: 2,
      theme: 'Culture of Responsible AI',
      activities: 'Workshops with business & technical owners.',
      deliverables: 'Draft AI principles + policy gap list.',
      icon: Users
    },
    {
      week: 3,
      theme: 'Risk Management',
      activities: '2-hr risk workshop, employee micro-training.',
      deliverables: 'Risk register & mitigation plan.',
      icon: Target
    },
    {
      week: 4,
      theme: 'Deep-Dive Risk Analysis',
      activities: 'Threat analysis on priority projects, best-practice checklist.',
      deliverables: 'Risk report & recommendations.',
      icon: Shield
    },
    {
      week: 5,
      theme: 'Governance & Responsibility',
      activities: '2-hr governance session, RACI modelling.',
      deliverables: 'Governance charter & process map.',
      icon: FileText
    },
    {
      week: 6,
      theme: 'Up-skill Workforce',
      activities: '3-hr advanced risk training, CAICO certification prep.',
      deliverables: 'Certified team & roadmap for continuous compliance.',
      icon: Award
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast-track Compliance',
      description: 'Get compliant in 6 weeks while ActReady is in beta development.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Work directly with our compliance specialists and AI risk experts.'
    },
    {
      icon: Shield,
      title: 'Immediate Risk Reduction',
      description: 'Identify and mitigate vulnerabilities before they become problems.'
    },
    {
      icon: FileText,
      title: 'Audit-Ready Documentation',
      description: 'Complete compliance documentation package ready for regulatory review.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E16] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C30]/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF5C30]/10 border border-[#FF5C30]/20 text-[#FF5C30] text-sm font-medium mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              6-Week Engagement
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Full-Stack <span className="text-[#FF5C30]">Compliance</span> Service
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Jump-start your AI compliance journey with our comprehensive 6-week engagement while ActReady is in beta.
            </p>
            
            <Link
              to="/contact"
              className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Engagement
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section 
        data-section="benefits"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Our Engagement?
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive compliance solution delivered by experts in AI regulation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-[#FF5C30] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Week Timeline */}
      <section 
        data-section="timeline"
        className={cn(
          "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
          visibleSections.has('timeline') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our 6-Week Engagement Blueprint
              </h2>
              <p className="text-xl text-gray-300">
                Structured approach to building comprehensive AI compliance.
              </p>
            </div>
            
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-700"></div>
                <div className="grid grid-cols-6 gap-4">
                  {engagementWeeks.map((week, index) => (
                    <div key={week.week} className="relative">
                      <div 
                        className={cn(
                          "w-16 h-16 rounded-full border-4 flex items-center justify-center text-sm font-bold mx-auto mb-6 cursor-pointer transition-all duration-300",
                          activeWeek === index 
                            ? "bg-[#FF5C30] border-[#FF5C30] text-white" 
                            : "bg-gray-900 border-gray-700 text-gray-400 hover:border-[#FF5C30]/50"
                        )}
                        onClick={() => setActiveWeek(index)}
                      >
                        {week.week}
                      </div>
                      <div className="text-center">
                        <h3 className={cn(
                          "font-semibold mb-2 text-sm transition-colors duration-300",
                          activeWeek === index ? "text-[#FF5C30]" : "text-white"
                        )}>
                          {week.theme}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Active Week Details */}
              <div className="mt-12 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  {React.createElement(engagementWeeks[activeWeek].icon, {
                    className: "w-8 h-8 text-[#FF5C30] mr-4"
                  })}
                  <div>
                    <h3 className="text-2xl font-bold text-[#FF5C30]">
                      Week {engagementWeeks[activeWeek].week}: {engagementWeeks[activeWeek].theme}
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Key Activities</h4>
                    <p className="text-gray-300">{engagementWeeks[activeWeek].activities}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Deliverables</h4>
                    <p className="text-gray-300">{engagementWeeks[activeWeek].deliverables}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6">
              {engagementWeeks.map((week, index) => (
                <div key={week.week} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#FF5C30] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#FF5C30]">{week.theme}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Activities:</h4>
                      <p className="text-gray-300 text-sm">{week.activities}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Deliverables:</h4>
                      <p className="text-gray-300 text-sm">{week.deliverables}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section 
        data-section="included"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('included') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What's Included
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive service package with ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-[#FF5C30]">Workshops & Training</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    Stakeholder alignment sessions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    Risk assessment workshops
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    Governance design sessions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    Team certification training
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-[#FF5C30]">Documentation & Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    AI principles & policy framework
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    Comprehensive risk register
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    Governance charter & processes
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5C30] mr-3 flex-shrink-0" />
                    Compliance roadmap
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#FF5C30]">Bonus: Early Access to ™</h3>
              <p className="text-gray-300">
                All engagement clients receive priority access to our SaaS platform when it launches, plus exclusive lifetime discount pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF5C30]/10 to-[#FF5C30]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Compliant in 6 Weeks?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Limited availability. Secure your spot for Q3 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Engagement
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
