
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Target, Building, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
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

  const stats = [
    { number: '4', label: 'Co-Founders' },
    { number: '100%', label: 'AI-Focused' },
    { number: '24/7', label: 'Regulatory Monitoring' },
    { number: '2024', label: 'Founded' }
  ];

  const teamMembers = [
    {
      name: 'Cyril Tata',
      role: 'Co-Founder & Technical Lead',
      bio: 'Passionate about building robust AI solutions with a focus on compliance, security, and scalable architecture.',
      image: '/cyril_image.png',
      linkedin: 'https://www.linkedin.com/in/cyriltata/'
    },
    {
      name: 'Tianga Dieudonne',
      role: 'Co-Founder & Compliance Expert',
      bio: 'Specializing in regulatory frameworks and ensuring AI systems meet the highest standards of compliance and ethics.',
      image: '/dieu_image.png',
      linkedin: 'https://www.linkedin.com/in/tianga-dieudonne/'
    },
    {
      name: 'Mircea Anton',
      role: 'Co-Founder & Strategy Advisor',  
      bio: 'Driving strategic initiatives and business development with extensive experience in technology consulting and digital transformation.',
      image: '/mircea_image.png',
      linkedin: 'https://www.linkedin.com/in/mircea-anton-469b8b21/'
    },
    {
      name: 'Dr. Chamberlain Mbah',
      role: 'Co-Founder & AI Specialist',
      bio: 'Bringing deep expertise in AI systems and regulatory compliance to help organizations navigate the complex landscape of AI governance.',
      image: '/chamberlain_image.png',
      linkedin: 'https://www.linkedin.com/in/chamberlain-mbah/'
    }
  ];

  const whyChooseUs = [
    {
      title: "AI-First Approach",
      description: "Unlike generic compliance consultants, we specialize exclusively in AI regulations and understand the unique challenges of AI systems.",
      icon: "🤖"
    },
    {
      title: "Practical Experience",
      description: "Our team combines deep technical knowledge with hands-on experience in building and deploying AI systems in regulated environments.",
      icon: "⚡"
    },
    {
      title: "Future-Ready Solutions",
      description: "We stay ahead of evolving regulations like the EU AI Act, ensuring your compliance strategy adapts to new requirements.",
      icon: "🚀"
    }
  ];

  const industries = [
    'FinTech',
    'Healthcare',
    'Retail',
    'Government',
    'Automotive',
    'Manufacturing',
    'Energy',
    'Education'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the security and privacy of your AI systems and compliance data above all else.'
    },
    {
      icon: Target,
      title: 'AI-Specific Expertise',
      description: 'Our solutions are purpose-built for AI compliance, not adapted from generic frameworks.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work alongside your teams as trusted advisors, not just service providers.'
    },
    {
      icon: Award,
      title: 'Continuous Innovation',
      description: 'We stay ahead of regulatory changes to keep your organization compliant and competitive.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E16] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C30]/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              About <span className="text-[#FF5C30]">ActReady</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We're building the future of AI compliance – helping organizations navigate the complex landscape of AI regulations with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section 
        data-section="mission"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To democratize AI compliance by making it accessible, affordable, and actionable for organizations of all sizes. 
              We believe that responsible AI shouldn't be a luxury – it should be the standard.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        data-section="team"
        className={cn(
          "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
          visibleSections.has('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              Our passionate team of co-founders working together to make AI compliance accessible and actionable for organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-[#FF5C30] font-medium mb-4">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin}
                  className="inline-flex items-center text-[#FF5C30] hover:text-[#FF5C30]/80 transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section 
        data-section="stats"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that demonstrate our commitment to AI compliance excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FF5C30] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section 
        data-section="values"
        className={cn(
          "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
          visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-[#FF5C30] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        data-section="why-choose-us"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('why-choose-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose ActReady
            </h2>
            <p className="text-xl text-gray-300">
              What sets us apart in the AI compliance landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section 
        data-section="industries"
        className={cn(
          "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
          visibleSections.has('industries') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300">
              AI compliance expertise across diverse sectors and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <div className="text-gray-300 font-medium">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF5C30]/10 to-[#FF5C30]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing community of organizations building AI responsibly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
