import React, { useState, useEffect } from 'react';
import avatar from '../assets/avatar.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Labs', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b 
      ${scrolled ? 'py-4 bg-navy/80 backdrop-blur-xl border-white/5 shadow-lg shadow-black/10' : 'py-6 bg-transparent border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/20 rounded-xl transform rotate-0 group-hover:rotate-12 transition-transform duration-300"></div>
             <div className="absolute inset-0 bg-secondary/20 rounded-xl transform rotate-0 group-hover:-rotate-6 transition-transform duration-300 delay-75"></div>
             <div className="relative w-10 h-10 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden">
                <img src={avatar} alt="Deep Javiya" className="w-full h-full object-cover" />
             </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-slate-100">Deep Javiya</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="relative text-slate-400 hover:text-white text-sm font-medium transition-colors group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a 
          href="#contact"
          className="relative px-6 py-2.5 rounded-full font-medium text-sm text-white bg-white/5 border border-white/10 overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <span className="relative flex items-center gap-2">
            Hire Me
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;