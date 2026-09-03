import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Bridge3DVisual } from './Bridge3DVisual';

interface HeroProps {
  onCtaClick: (source?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-[#05080D]"
    >
      {/* Cinematic Deep Navy Atmospheric Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#071A33]/90 via-[#0B2344]/35 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#1688FF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Editorial Category Pill */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08111F] border border-[#0B2344] mb-8 text-xs font-medium text-[#AAB7C7] shadow-[0_0_20px_rgba(7,26,51,0.6)] transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF] shadow-[0_0_8px_#00d9ff]"></span>
            </span>
            <span className="text-[#F5F7FA] font-semibold">Exclusively for Recruitment Agencies</span>
            <span className="text-[#0B2344]">•</span>
            <span className="text-[#AAB7C7] font-mono text-[11px]">100% Performance-Based</span>
          </div>

          {/* Large Confident Headline */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-[#F5F7FA] leading-[1.06] mb-6"
          >
            The Bridge to Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#1688FF] to-[#00D9FF] [text-shadow:0_0_30px_rgba(0,217,255,0.4)]">
              Next Client.
            </span>
          </h1>

          {/* Subheading */}
          <p
            id="hero-subheading"
            className="text-lg sm:text-xl text-[#AAB7C7] leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            We connect recruitment agencies with companies that are actively
            hiring — turning hiring demand into qualified conversations.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              id="hero-primary-cta"
              onClick={() => onCtaClick('hero')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0B2344] via-[#0D305C] to-[#1688FF] text-white font-bold text-sm tracking-tight border border-[#1688FF]/50 shadow-[0_0_25px_rgba(22,136,255,0.35)] hover:shadow-[0_0_35px_rgba(0,217,255,0.55)] hover:border-[#00D9FF]/80 transition-all duration-200 active:scale-[0.99] cursor-pointer group"
            >
              <span>Get Your First Meeting Free</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <a
              href="#how-it-works"
              id="hero-secondary-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#08111F] text-[#F5F7FA] font-semibold text-sm border border-[#0B2344] hover:bg-[#0A1930] hover:border-[#1688FF]/40 transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>Explore How It Works</span>
            </a>
          </div>

          {/* Reassurance points */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-[#AAB7C7]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00D9FF]" />
              <span>No monthly retainer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#00D9FF]" />
              <span>Pay only for qualified meetings</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00D9FF]" />
              <span>Direct calendar booking</span>
            </div>
          </div>
        </div>

        {/* 3D Visual Section */}
        <div className="mt-10">
          <Bridge3DVisual />
        </div>
      </div>
    </section>
  );
};
