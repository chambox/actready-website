import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, FileCheck, BarChart3, Lock, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlatformSectionProps {
  isVisible: boolean;
  counters: {
    fines: number;
    savings: number;
    satisfaction: number;
    literacy: number;
  };
}

const PlatformSection = ({ isVisible, counters }: PlatformSectionProps) => {
  return (
    <section 
      data-section="platform"
      className={cn(
        "py-20 transition-all duration-1000",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF5C30]/10 border border-[#FF5C30]/20 text-[#FF5C30] text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Launching Q4 2025
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Introducing <span className="text-[#FF5C30]">ActReady™</span> – Our Upcoming SaaS Platform
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Built for AI specifically – not retro-fitted from generic GRC software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-[#FF5C30]/50 transition-all duration-300">
            <FileCheck className="w-12 h-12 text-[#FF5C30] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Policy Library</h3>
            <p className="text-gray-300 mb-4">Pre-loaded global AI policies & best-practice templates.</p>
            <p className="text-[#FF5C30] font-medium">Start compliant on day one.</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-[#FF5C30]/50 transition-all duration-300">
            <BarChart3 className="w-12 h-12 text-[#FF5C30] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Risk Register</h3>
            <p className="text-gray-300 mb-4">Dynamic risk scoring, likelihood/impact heat-maps, and mitigation workflows.</p>
            <p className="text-[#FF5C30] font-medium">See vulnerability hotspots instantly.</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-[#FF5C30]/50 transition-all duration-300">
            <Lock className="w-12 h-12 text-[#FF5C30] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Evidence Vault</h3>
            <p className="text-gray-300 mb-4">Immutable logs, version control, and audit-ready exports.</p>
            <p className="text-[#FF5C30] font-medium">Cut audit prep time by {counters.savings}%.</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Join the Beta Wait-list
            <CheckCircle className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
