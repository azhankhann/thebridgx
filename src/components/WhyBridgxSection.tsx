import React from 'react';
import { Ban, DollarSign, Flame, Crosshair, ArrowRight, Check } from 'lucide-react';

interface WhyBridgxProps {
  onCtaClick: () => void;
}

export const WhyBridgxSection: React.FC<WhyBridgxProps> = ({ onCtaClick }) => {
  const benefits = [
    {
      icon: Ban,
      title: 'No monthly retainer',
      highlight: 'Zero Fixed Overhead',
      description:
        'Traditional lead gen agencies lock you into hefty $3,000–$5,000 monthly retainers with zero guarantees. With Bridgx, there are no contracts, no subscriptions, and zero retainer fees.',
    },
    {
      icon: DollarSign,
      title: 'Pay per qualified meeting',
      highlight: '100% Performance-Based',
      description:
        'You only pay when a qualified hiring decision-maker attends the meeting and confirms active hiring needs. If a lead does not meet our qualification criteria, you pay nothing.',
    },
    {
      icon: Flame,
      title: 'Active hiring opportunities',
      highlight: 'High-Intent Demand',
      description:
        'No cold conversations or speculative intros. We exclusively target companies with currently funded, active job openings looking for recruitment and staffing support.',
    },
    {
      icon: Crosshair,
      title: 'Targeted to your niche',
      highlight: 'Domain Specialization',
      description:
        'Whether your agency focuses on Software Engineering, Private Equity, Life Sciences, or C-Suite Search, we curate meetings exclusively within your precise domain.',
    },
  ];

  return (
    <section
      id="why-bridgx"
      className="py-24 md:py-32 relative border-t border-[#0B2344] bg-gradient-to-b from-[#05080D] via-[#071A33]/40 to-[#05080D] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[350px] bg-[#0B2344]/25 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08111F] border border-[#0B2344] text-[#AAB7C7] text-xs font-mono mb-4 shadow-sm">
              <span>Why Agencies Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#F5F7FA] leading-tight">
              Why Bridgx
            </h2>
            <p className="text-base sm:text-lg text-[#AAB7C7] mt-4 leading-relaxed font-normal">
              A model built specifically around the business economics of modern
              recruitment and staffing agencies.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0B2344] via-[#0D305C] to-[#1688FF] text-white font-semibold text-xs tracking-tight border border-[#1688FF]/40 shadow-[0_0_15px_rgba(22,136,255,0.25)] hover:shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:border-[#00D9FF]/70 transition-all cursor-pointer"
            >
              <span>Get Your First Meeting Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#08111F] border border-[#0B2344] hover:border-[#1688FF]/50 hover:shadow-[0_0_25px_rgba(7,26,51,0.7)] transition-all duration-200 relative group shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1930] border border-[#0B2344] flex items-center justify-center text-[#00D9FF] shrink-0 group-hover:border-[#1688FF]/50 transition-colors shadow-[0_0_12px_rgba(0,217,255,0.1)]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#F5F7FA] tracking-tight">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-[11px] font-mono font-semibold text-[#00D9FF] mb-3 uppercase tracking-wider">
                      {benefit.highlight}
                    </p>
                    <p className="text-sm text-[#AAB7C7] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
