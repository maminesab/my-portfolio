
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-bg/90 backdrop-blur-md py-3 border-b border-cyber-muted' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cyber-primary rounded flex items-center justify-center font-bold text-cyber-bg">AV</div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block">
            ALEX <span className="text-cyber-primary">VANCE</span>
          </span>
        </a>
        <div className="flex space-x-8">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-cyber-primary transition-colors duration-200 tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
