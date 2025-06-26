
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TrainingPreviewSectionProps {
  isVisible: boolean;
  counters: {
    fines: number;
    savings: number;
    satisfaction: number;
    literacy: number;
  };
}

const TrainingPreviewSection = ({ isVisible, counters }: TrainingPreviewSectionProps) => {
  return (
    <section 
      data-section="training"
      className={cn(
        "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI Awareness & Risk Training
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            <span className="text-[#FF5C30] font-bold">{counters.satisfaction}%</span> of past attendees reported improved confidence in shipping compliant AI products.
          </p>
          
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FF5C30]">Responsible AI Fundamentals</h3>
            <p className="text-gray-300 mb-6">3-hour live virtual workshop + self-paced micro-learning</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3">You will learn:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Regulatory landscape (EU AI Act, NIST AI RMF)</li>
                  <li>• Identifying and classifying AI risks</li>
                  <li>• Role-based responsibilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Hands-on exercises:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• "Red-team" exercise: spotting bias</li>
                  <li>• Creating AI Impact Assessments</li>
                  <li>• Using ActReady™ platform</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Link
            to="/training"
            className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Enroll Your Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingPreviewSection;
