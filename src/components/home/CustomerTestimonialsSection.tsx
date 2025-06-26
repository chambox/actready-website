
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "ActReady transformed our AI compliance process. What used to take weeks now takes days, and we're confident we're meeting all regulatory requirements.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow Solutions",
    rating: 5
  },
  {
    content: "The training program was exceptional. Our entire team now understands AI risks and compliance requirements. The platform makes ongoing compliance management seamless.",
    author: "Michael Rodriguez",
    role: "VP of Product",
    company: "DataVision Corp",
    rating: 5
  },
  {
    content: "ActReady's platform caught compliance issues we didn't even know we had. Their expertise in EU AI Act requirements saved us from potential fines.",
    author: "Dr. Amara Patel",
    role: "Head of AI Ethics",
    company: "InnovateLabs",
    rating: 5
  },
  {
    content: "The combination of automated compliance tools and expert training is exactly what we needed. ActReady made AI regulation approachable for our non-technical stakeholders.",
    author: "Jason Lee",
    role: "Chief Compliance Officer",
    company: "FinTech Innovations",
    rating: 5
  }
];

const CustomerTestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF5C30]/10 border border-[#FF5C30]/20 text-[#FF5C30] text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Customer Success Stories
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          
          <p className="text-xl text-gray-300">
            See how organizations are staying ahead of AI regulations with ActReady
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-[#FF5C30]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FF5C30] fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#FF5C30]/30 absolute -top-2 -left-2" />
                <p className="text-gray-300 text-lg leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white text-lg">
                  {testimonial.author}
                </div>
                <div className="text-[#FF5C30] font-medium">
                  {testimonial.role}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;
