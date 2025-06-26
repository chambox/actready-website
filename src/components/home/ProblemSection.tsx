
import React from 'react';
import { AlertTriangle, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProblemSectionProps {
  isVisible: boolean;
  counters: {
    fines: number;
    savings: number;
    satisfaction: number;
    literacy: number;
  };
}

const ProblemSection = ({ isVisible, counters }: ProblemSectionProps) => {
  return (
    <section 
      data-section="problem"
      className={cn(
        "py-20 bg-gradient-to-b from-red-900/20 to-transparent transition-all duration-1000",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Regulatory Risk Alert
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The AI landscape is moving faster than regulation – and penalties for getting it wrong are steep.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-red-900/20 border border-red-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">€{counters.fines}M</div>
            <div className="text-sm text-gray-300">Fines up to €30M or 6% of global turnover under the EU AI Act</div>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/20 rounded-2xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Project Delays</div>
            <div className="text-sm text-gray-300">Costly re-engineering when systems fail external audits</div>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/20 rounded-2xl p-6 text-center">
            <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Reputation Damage</div>
            <div className="text-sm text-gray-300">Erosion of user and investor trust</div>
          </div>
          
          <div className="bg-red-900/20 border border-red-500/20 rounded-2xl p-6 text-center">
            <BarChart3 className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Global Complexity</div>
            <div className="text-sm text-gray-300">Emerging US, UK, and APAC frameworks add complexity</div>
          </div>
        </div>
        
        {/* Regulatory Logos */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Official frameworks we help you navigate:</p>
          <div className="flex justify-center items-center opacity-60">
            <div className="px-6 py-3 border border-gray-600 rounded-lg">EU AI Act</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
