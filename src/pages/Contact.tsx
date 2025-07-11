import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    interest: 'platform'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        interest: 'platform'
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ai-compliance-co.com',
      action: 'mailto:info@ai-compliance-co.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+32 471 60 07 50',
      action: 'tel:+32471600750'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Gavere, Belgium',
      action: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      action: null
    }
  ];

  const services = [
    { value: 'platform', label: 'ActReady Platform Beta' },
    { value: 'training', label: 'AI Risk Training' },
    { value: 'services', label: '6-Week Engagement' },
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E16] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C30]/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Get in <span className="text-[#FF5C30]">Touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your AI compliance? Let's discuss how we can help your organization build AI responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-300">Thank you for contacting us. We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-white">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-600 text-white focus:border-[#FF5C30] mt-1"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-600 text-white focus:border-[#FF5C30] mt-1"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company" className="text-white">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-600 text-white focus:border-[#FF5C30] mt-1"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="role" className="text-white">Role</Label>
                          <Input
                            id="role"
                            name="role"
                            type="text"
                            value={formData.role}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-600 text-white focus:border-[#FF5C30] mt-1"
                            placeholder="CTO, Compliance Officer, etc."
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="interest" className="text-white">I'm interested in</Label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="mt-1 w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-[#FF5C30] focus:outline-none"
                        >
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-white">Message</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-[#FF5C30] focus:outline-none resize-none"
                          placeholder="Tell us about your AI compliance needs..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white py-3"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Get in touch with our team of AI compliance experts. We're here to help you navigate the complex world of AI regulations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-[#FF5C30]/50 transition-all duration-300">
                    <info.icon className="w-8 h-8 text-[#FF5C30] mb-4" />
                    <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-gray-300 hover:text-[#FF5C30] transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.details}</p>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Quick Actions */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 px-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Schedule a Demo</span>
                    <Button 
                      size="sm" 
                      className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white"
                    >
                      Book Now
                    </Button>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Download Resources</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white"
                    >
                      Access
                    </Button>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Join Beta Waitlist</span>
                    <Button 
                      size="sm" 
                      className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white"
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-gradient-to-b from-[#FF5C30]/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Location
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Serving clients globally from our office in Belgium.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#FF5C30] mb-4">Gavere</h3>
                <p className="text-gray-300 mb-4">
                  Gavere, Belgium
                </p>
                <p className="text-gray-400 text-sm">
                  Central European Time<br />
                  Mon-Fri: 9am-6pm CET
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
