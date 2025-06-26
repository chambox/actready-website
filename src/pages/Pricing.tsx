
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Users, Building, Star, Shield, Headphones, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const Pricing = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');
  
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

  const packages = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small teams experimenting with AI',
      price: { yearly: 2000, monthly: 200 },
      features: [
        'Access to training library',
        'Policy templates',
        'Basic risk assessments',
        'Email support',
        'Up to 3 team members'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Growth',
      icon: Users,
      description: 'Ideal for mid-size organizations shipping AI products',
      price: { yearly: 15000, monthly: 1500 },
      features: [
        'Everything in Starter',
        'Full risk register',
        'Evidence vault',
        'Model monitoring',
        'Up to 5 seats',
        'Priority support',
        'Quarterly compliance reviews'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise Pilot',
      icon: Building,
      description: 'For regulated industries with complex requirements',
      price: { yearly: 'Custom', monthly: 'Custom' },
      features: [
        'Everything in Growth',
        'Dedicated consultant',
        'Up to 10 seats',
        'Custom integrations',
        'On-premise deployment',
        'White-glove onboarding',
        '24/7 phone support',
        'Regulatory expertise'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'Which regulations do you cover?',
      answer: 'We map to the EU AI Act frameworks. Our compliance experts stay current with regulatory changes.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes – all data is encrypted in transit and at rest, hosted in EU/US Gov-cloud regions. We maintain SOC 2 Type II and ISO 27001 certifications.'
    },
    {
      question: 'Can I import existing risk logs?',
      answer: 'Absolutely, via CSV upload or REST API. We support most common risk management formats and provide migration assistance.'
    },
    {
      question: 'Do you offer on-premise deployment?',
      answer: 'Yes, available for Enterprise Pilot customers. We can deploy in your private cloud or on-premise infrastructure.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include expert support. Enterprise customers get dedicated compliance consultants and 24/7 phone support.'
    },
    {
      question: 'How does beta pricing work?',
      answer: 'Beta customers lock in these prices for life, even after general availability. You secure now and pay when the platform launches in Q4 2025.'
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
              <Star className="w-4 h-4 mr-2" />
              Beta Pricing – Lock in Now, Pay Later
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Transparent <span className="text-[#FF5C30]">Pricing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your organization. All beta customers get lifetime discount pricing.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-900/50 border border-gray-700 rounded-full p-1 mb-12">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  billingPeriod === 'monthly' 
                    ? "bg-[#FF5C30] text-white" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                  billingPeriod === 'yearly' 
                    ? "bg-[#FF5C30] text-white" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section 
        data-section="pricing"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={cn(
                  "bg-gray-900/50 border rounded-2xl p-8 relative transition-all duration-500 hover:scale-105",
                  pkg.popular 
                    ? "border-[#FF5C30] bg-[#FF5C30]/5 transform scale-105" 
                    : "border-gray-700 hover:border-[#FF5C30]/50"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#FF5C30] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <pkg.icon className="w-12 h-12 text-[#FF5C30] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    {typeof pkg.price[billingPeriod] === 'string' ? (
                      <div className="text-3xl font-bold text-[#FF5C30]">{pkg.price[billingPeriod]}</div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-[#FF5C30] mb-1">
                          ${pkg.price[billingPeriod].toLocaleString()}
                        </div>
                        <div className="text-gray-400 text-sm">
                          per {billingPeriod === 'yearly' ? 'year' : 'month'}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={cn(
                      "w-full py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 inline-block",
                      pkg.popular 
                        ? "bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white" 
                        : "bg-transparent border border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white"
                    )}
                  >
                    {pkg.cta}
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-[#FF5C30] mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              *Beta pricing – secure now, pay later at GA
            </p>
            <p className="text-sm text-gray-500">
              All prices in USD. Enterprise pricing based on organization size and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section 
        data-section="comparison"
        className={cn(
          "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
          visibleSections.has('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose ActReady?
            </h2>
            <p className="text-xl text-gray-300">
              Purpose-built for AI compliance, not adapted from legacy systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-[#FF5C30] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security First</h3>
              <p className="text-gray-300 text-sm">SOC 2 Type II & ISO 27001 ready</p>
            </div>
            
            <div className="text-center">
              <Zap className="w-12 h-12 text-[#FF5C30] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI-Specific</h3>
              <p className="text-gray-300 text-sm">Built for AI, not retro-fitted</p>
            </div>
            
            <div className="text-center">
              <Headphones className="w-12 h-12 text-[#FF5C30] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-300 text-sm">Compliance specialists available</p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-[#FF5C30] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">96% customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section 
        data-section="faq"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and platform.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#FF5C30]">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF5C30]/10 to-[#FF5C30]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Secure Your AI Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Lock in beta pricing now. Limited spots available for Q4 2025 launch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Choose Your Plan
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
