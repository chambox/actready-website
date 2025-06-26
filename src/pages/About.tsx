
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
    { number: '500+', label: 'Professionals Trained' },
    { number: '50+', label: 'Companies Served' },
    { number: '96%', label: 'Satisfaction Rate' },
    { number: '€2.5M', label: 'Compliance Risks Mitigated' }
  ];

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Leading ActReady with 15+ years of experience in AI and regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400',
      linkedin: '#'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Driving our technical vision with deep expertise in AI systems and enterprise architecture.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      linkedin: '#'
    },
    {
      name: 'Mike Johnson',
      role: 'COO',
      bio: 'Scaling our operations and ensuring seamless delivery of compliance solutions worldwide.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400',
      linkedin: '#'
    }
  ];

  const testimonials = [
    {
      quote: "ActReady's pilot saved us three months on our audit. Their expertise in AI regulations is unmatched.",
      author: "Sarah Chen",
      title: "Director of Compliance",
      company: "FinTech Scale-Up"
    },
    {
      quote: "The training program transformed how our team approaches AI development. Now compliance is built into our workflow.",
      author: "Michael Rodriguez",
      title: "Head of AI",
      company: "HealthAI Solutions"
    },
    {
      quote: "Their 6-week engagement gave us a complete compliance framework. We went from zero to audit-ready.",
      author: "Dr. Emily Watson",
      title: "CTO",
      company: "RetailPro AI"
    }
  ];

  const clientLogos = [
    'FinTech-X',
    'HealthAI',
    'RetailPro',
    'GovCloud',
    'AutonoTech',
    'DataFlow',
    'SecureAI',
    'TechCorp'
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
              The leaders driving ActReady's mission to make AI compliance accessible for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* Testimonials */}
      <section 
        data-section="testimonials"
        className={cn(
          "py-20 transition-all duration-1000",
          visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from organizations we've helped achieve AI compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#FF5C30] mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                  <div className="text-sm text-[#FF5C30]">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section 
        data-section="clients"
        className={cn(
          "py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent transition-all duration-1000",
          visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300">
              Organizations of all sizes trust us with their AI compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-[#FF5C30]/50 transition-all duration-300"
              >
                <div className="text-gray-300 font-medium">{logo}</div>
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
