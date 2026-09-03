import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BridgxLogo } from './BridgxLogo';

interface NavbarProps {
  onCtaClick: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Who We Help', href: '#problem' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05080D]/90 backdrop-blur-xl border-b border-[#0B2344] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center group focus:outline-none"
        >
          <BridgxLogo variant="wordmark" size="md" theme="dark" showGlow={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm font-medium text-[#AAB7C7] hover:text-[#F5F7FA] transition-colors cursor-pointer py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D9FF] to-[#1688FF] transition-all duration-200 group-hover:w-full shadow-[0_0_8px_rgba(0,217,255,0.8)]" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-cta-btn"
            onClick={() => onCtaClick('navbar_desktop')}
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2 rounded-xl bg-gradient-to-r from-[#0B2344] via-[#0D305C] to-[#1688FF] text-white font-semibold text-xs tracking-tight border border-[#1688FF]/40 shadow-[0_0_15px_rgba(22,136,255,0.25)] hover:shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:border-[#00D9FF]/70 transition-all duration-200 active:scale-[0.99] cursor-pointer"
          >
            <span>Get Your First Meeting Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#F5F7FA] hover:bg-[#08111F] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#08111F] border-b border-[#0B2344] px-4 pt-3 pb-6 space-y-3 shadow-2xl"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium text-[#AAB7C7] hover:bg-[#0A1930] hover:text-[#F5F7FA]"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick('navbar_mobile');
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0B2344] via-[#0D305C] to-[#1688FF] border border-[#1688FF]/40 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(22,136,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
            >
              <span>Get Your First Meeting Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
