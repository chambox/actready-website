
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrainingMandateSectionProps {
  isVisible: boolean;
  counters: {
    fines: number;
    savings: number;
    satisfaction: number;
    literacy: number;
  };
}

const TrainingMandateSection = ({ isVisible, counters }: TrainingMandateSectionProps) => {
  return (
    <section 
      data-section="training-mandate"
      className={cn(
        "py-20 bg-gradient-to-b from-amber-900/20 to-transparent transition-all duration-1000",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Mandatory Requirement
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Even if you "just" use <span className="text-[#FF5C30]">Copilot</span> – AI Training is Mandatory
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The EU AI Act doesn't care if you build or buy AI. If you deploy it, your workforce must demonstrate "sufficient AI literacy" or face fines up to <span className="text-red-400 font-bold">€{counters.literacy}M</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Legal Requirements */}
            <div className="bg-amber-900/20 border border-amber-500/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-amber-400 mr-3" />
                <h3 className="text-2xl font-bold text-amber-400">Legal Requirements</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-amber-300">Article 4 – AI Literacy</h4>
                  <p className="text-gray-300 text-sm">Every provider and deployer must ensure staff attain "sufficient AI literacy" through appropriate training and guidance.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-amber-300">Article 14 – Human Oversight</h4>
                  <p className="text-gray-300 text-sm">High-risk AI systems must be overseen by natural persons with the necessary competence, training and authority.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-amber-300">Article 26 – Obligations of Deployers</h4>
                  <p className="text-gray-300 text-sm">Deployers must assign trained, competent staff to monitor and use AI systems correctly.</p>
                </div>
              </div>
            </div>

            {/* Consequences */}
            <div className="bg-red-900/20 border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-red-400">Non-Compliance Penalties</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Administrative fines of up to €15 million or 3% of global annual turnover</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Suspension of AI system deployment</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Requirement to evidence workforce competence during audits</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Mandatory reporting and third-party compliance assessments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-[#FF5C30]/10 border border-[#FF5C30]/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#FF5C30] mb-4">Don't Wait for an Audit</h3>
              <p className="text-xl text-gray-300 mb-6">
                <span className="text-[#FF5C30] font-bold">{counters.satisfaction}%</span> of our training participants report improved confidence in deploying compliant AI solutions
              </p>
              <Link
                to="/training"
                className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Your Team Certified
                <GraduationCap className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingMandateSection;
