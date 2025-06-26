
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import LogoComponent from './LogoComponent';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Platform', path: '/platform' },
    { name: 'Training', path: '/training' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E16] text-white">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
          isScrolled 
            ? "bg-[#0B0E16]/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/brand-logo.png" 
                alt="ActReady Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <span className="text-xl sm:text-2xl font-semibold text-white">ActReady</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative text-white hover:text-[#FF5C30] py-2 transition-colors duration-300",
                  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FF5C30] after:transition-all hover:after:w-full",
                  location.pathname === item.path ? "text-[#FF5C30] after:w-full" : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/contact"
              className="bg-transparent border border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              Book Audit
            </Link>
            <Link
              to="/contact"
              className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 z-40 bg-[#0B0E16] flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}>
          <nav className="flex flex-col space-y-6 items-center mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-xl font-medium py-2 px-4 w-full text-center rounded-lg transition-colors duration-300",
                  location.pathname === item.path 
                    ? "text-[#FF5C30] bg-[#FF5C30]/10" 
                    : "text-white hover:text-[#FF5C30] hover:bg-[#FF5C30]/10"
                )}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 mt-8 w-full">
              <Link
                to="/contact"
                className="bg-transparent border border-[#FF5C30] text-[#FF5C30] hover:bg-[#FF5C30] hover:text-white py-3 px-6 rounded-full transition-all duration-300 text-center"
                onClick={closeMenu}
              >
                Book Free Audit
              </Link>
              <Link
                to="/contact"
                className="bg-[#FF5C30] hover:bg-[#FF5C30]/90 text-white py-3 px-6 rounded-full transition-all duration-300 text-center"
                onClick={closeMenu}
              >
                Request Early Access
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0E16] border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/brand-logo.png" 
                  alt="ActReady Logo" 
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    // Fallback if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-xl font-semibold">ActReady</span>
              </div>
              <p className="text-gray-400 mb-4">
                Stay ahead of AI regulations with automated compliance, risk mitigation, and team training.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#FF5C30] transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-[#FF5C30] transition-colors">Twitter</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-[#FF5C30] transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#FF5C30] transition-colors">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-[#FF5C30] transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#FF5C30] transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#FF5C30] transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#FF5C30] transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#FF5C30] transition-colors">Responsible AI Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ActReady. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <a href="mailto:info@actready.eu" className="text-gray-400 hover:text-[#FF5C30] transition-colors text-sm">
                info@actready.eu
              </a>
              <a href="tel:+32471600750" className="text-gray-400 hover:text-[#FF5C30] transition-colors text-sm">
                +32 471 60 07 50
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
