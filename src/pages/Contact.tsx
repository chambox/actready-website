import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import emailjs from '@emailjs/browser';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Debug environment variables
  React.useEffect(() => {
    console.log('=== ENVIRONMENT VARIABLES DEBUG ===');
    console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('All import.meta.env:', import.meta.env);
    console.log('===================================');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // EmailJS configuration - You'll need to replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Debug log the actual values being used
      console.log('=== EMAILJS VALUES BEING USED ===');
      console.log('serviceId:', serviceId);
      console.log('templateId:', templateId);
      console.log('publicKey:', publicKey);
      console.log('================================');

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        role: formData.role,
        interest: services.find(s => s.value === formData.interest)?.label || formData.interest,
        message: formData.message,
        to_email: 'hello@act-ready.eu'
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
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
      }, 5000);

    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Sorry, there was an error sending your message. Please try again or contact us directly at hello@act-ready.eu');
    } finally {
      setIsLoading(false);
    }
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
      details: 'hello@act-ready.eu',
      action: 'mailto:hello@act-ready.eu'
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
      {/* Debug Section - Remove this after testing */}
      <div className="bg-red-900/20 border border-red-500/20 p-4 m-4 rounded-lg">
        <h3 className="text-red-300 font-bold mb-2">DEBUG - Environment Variables:</h3>
        <pre className="text-xs text-red-200">
          SERVICE_ID: {import.meta.env.VITE_EMAILJS_SERVICE_ID || 'undefined'}{'\n'}
          TEMPLATE_ID: {import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'undefined'}{'\n'}
          PUBLIC_KEY: {import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'undefined'}{'\n'}
          MODE: {import.meta.env.MODE}{'\n'}
          DEV: {import.meta.env.DEV ? 'true' : 'false'}{'\n'}
          PROD: {import.meta.env.PROD ? 'true' : 'false'}
        </pre>
      </div>

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
                  {error && (
                    <div className="mb-6 p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-300">Thank you for contacting us. We'll be in touch within 24 hours.</p>
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
                        disabled={isLoading}
                        className="w-full bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
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
