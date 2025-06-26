
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, BarChart3, Lock, Monitor, FileText, Zap, CheckCircle, Shield, Plug, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

const Platform = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
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

  const coreModules = [
    {
      icon: FileCheck,
      name: 'Policy Library',
      description: 'Pre-loaded global AI policies & best-practice templates.',
      benefit: 'Start compliant on day one.',
      features: [
        'Global regulatory templates',
        'Industry-specific policies',
        'Customizable frameworks',
        'Version control & updates'
      ]
    },
    {
      icon: BarChart3,
      name: 'Risk Register',
      description: 'Dynamic risk scoring, likelihood/impact heat-maps, and mitigation workflows.',
      benefit: 'See vulnerability hotspots instantly.',
      features: [
        'Real-time risk scoring',
        'Interactive heat-maps',
        'Automated workflows',
        'Risk mitigation tracking'
      ]
    },
    {
      icon: Lock,
      name: 'Evidence Vault',
      description: 'Immutable logs, version control, and audit-ready exports (PDF/JSON).',
      benefit: 'Cut audit prep time by 80%.',
      features: [
        'Immutable audit trails',
        'Version control system',
        'One-click exports',
        'Blockchain verification'
      ]
    },
    {
      icon: Monitor,
      name: 'Model Monitor',
      description: 'Continuous drift & bias detection via API connectors.',
      benefit: 'Catch issues before regulators do.',
      features: [
        'Real-time monitoring',
        'Bias detection algorithms',
        'Performance drift alerts',
        'API integrations'
      ]
    },
    {
      icon: FileText,
      name: 'Reporting Hub',
      description: 'One-click executive & regulatory reports.',
      benefit: 'Communicate compliance across the org.',
      features: [
        'Executive dashboards',
        'Regulatory reports',
        'Custom templates',
        'Automated scheduling'
      ]
    }
  ];

  const differentiators = [
    {
      icon: Zap,
      title: 'Built for AI Specifically',
      description: 'Not retro-fitted from generic GRC software. Every feature designed for AI compliance challenges.'
    },
    {
      icon: Plug,
      title: 'ML Stack Integrations',
      description: 'Plug-ins for popular platforms: Azure ML, Vertex AI, Databricks, and more.'
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'SOC 2 Type II and ISO 27001 ready. Your compliance data stays protected.'
    },
    {
      icon: Cloud,
      title: 'White-glove Onboarding',
      description: 'Early-access customers get dedicated support and lifetime discount pricing.'
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
              <Zap className="w-4 h-4 mr-2" />
              Private Beta Q4 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-[#FF5C30]">ActReady™</span> Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              The first AI compliance platform built specifically for AI teams. Automate your compliance workflows, manage risks, and stay audit-ready.
            </p>
            
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

      {/* Core Modules */}
      <section 
        data-section="modules"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('modules') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Five Core Modules
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to manage AI compliance in one integrated platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreModules.map((module, index) => (
              <div 
                key={module.name}
                className={cn(
                  "bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-[#FF5C30]/50 transition-all duration-500",
                  index === 2 ? "lg:col-span-2" : ""
                )}
              >
                <module.icon className="w-12 h-12 text-[#FF5C30] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{module.name}</h3>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <p className="text-[#FF5C30] font-medium mb-6">{module.benefit}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#FF5C30] mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section 
        data-section="differentiators"
        className={cn(
          "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
          visibleSections.has('differentiators') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-300">
              Purpose-built for AI compliance, not adapted from legacy systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div 
                key={diff.title}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <diff.icon className="w-12 h-12 text-[#FF5C30] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{diff.title}</h3>
                <p className="text-gray-300">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section 
        data-section="integrations"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('integrations') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Connect with your existing ML and data infrastructure.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {['Azure ML', 'Vertex AI', 'Databricks', 'AWS SageMaker', 'Snowflake', 'Hugging Face', 'MLflow', 'Weights & Biases'].map((platform) => (
                <div key={platform} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center hover:border-[#FF5C30]/50 transition-all duration-300">
                  <div className="text-sm font-medium">{platform}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#FF5C30]">API-First Architecture</h3>
              <p className="text-gray-300 mb-6">
                RESTful APIs and webhooks for custom integrations. Connect any tool in your AI workflow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-[#FF5C30]/10 border border-[#FF5C30]/20 rounded-full text-[#FF5C30] text-sm">REST API</span>
                <span className="px-4 py-2 bg-[#FF5C30]/10 border border-[#FF5C30]/20 rounded-full text-[#FF5C30] text-sm">Webhooks</span>
                <span className="px-4 py-2 bg-[#FF5C30]/10 border border-[#FF5C30]/20 rounded-full text-[#FF5C30] text-sm">SSO</span>
                <span className="px-4 py-2 bg-[#FF5C30]/10 border border-[#FF5C30]/20 rounded-full text-[#FF5C30] text-sm">SCIM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF5C30]/10 to-[#FF5C30]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your AI Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the private beta and get lifetime discount pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Beta Wait-list
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
