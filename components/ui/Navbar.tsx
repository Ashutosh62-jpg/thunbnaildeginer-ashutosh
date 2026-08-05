'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -80;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass-nav shadow-glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent p-[1px] shadow-glow-primary group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-bg-main rounded-[11px] flex items-center justify-center">
                <span className="font-heading font-black text-lg text-gradient">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold tracking-wider text-white flex items-center gap-1">
                ASHUTOSH
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-glow-primary" />
              </span>
              <span className="text-[10px] tracking-widest text-subtext uppercase font-mono">
                Thumbnail Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-bg-secondary/40 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? 'text-white font-semibold' : 'text-subtext hover:text-white'
                  }`}
                  data-cursor="hover"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/40 -z-10 shadow-glow-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-heading font-semibold text-white bg-gradient-to-r from-primary via-secondary to-accent p-[1px] group overflow-hidden shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300"
              data-cursor="button"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 px-5 py-2 rounded-full bg-bg-main/90 group-hover:bg-transparent transition-colors duration-300">
                <Sparkles className="w-4 h-4 text-accent animate-spin-slow" />
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-white/10 px-6 py-6 mt-3 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-lg font-heading font-medium text-subtext hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-heading font-bold shadow-glow-primary"
            >
              Hire Me Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
