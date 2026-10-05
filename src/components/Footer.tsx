import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BridgxLogo } from './BridgxLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#0B2344] bg-[#05080D] py-12 text-[#AAB7C7] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#0B2344]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <BridgxLogo variant="wordmark" size="sm" theme="dark" showGlow={true} />
            <span className="text-[#0B2344]">|</span>
            <span className="text-[#AAB7C7] text-xs">The bridge between recruitment & staffing agencies and hiring companies.</span>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-[#AAB7C7] text-xs font-medium">
            <a href="#how-it-works" className="hover:text-[#00D9FF] transition-colors">How It Works</a>
            <a href="#problem" className="hover:text-[#00D9FF] transition-colors">Who We Help</a>
            <a href="#why-bridgx" className="hover:text-[#00D9FF] transition-colors">Why Bridgx</a>
            <a href="#pricing" className="hover:text-[#00D9FF] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#00D9FF] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#00D9FF] transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#08111F] border border-[#0B2344] hover:bg-[#0A1930] hover:border-[#1688FF]/50 hover:text-[#00D9FF] transition-all cursor-pointer text-[#AAB7C7]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#AAB7C7]">
          <p>© {new Date().getFullYear()} Bridgx Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Pay-per-meeting B2B client acquisition for recruitment & staffing agencies</span>
            <span>•</span>
            <span className="text-[#00D9FF] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_6px_#00d9ff]" />
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
