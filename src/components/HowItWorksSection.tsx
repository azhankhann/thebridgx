import React from 'react';
import { Target, Search, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const steps = [
    {
      number: '01',
      title: 'Align',
      tagline: 'Define your ideal search profile',
      description:
        'We pinpoint your specific recruitment niches, fee structures, seniority levels, and geographic focus.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Prospect',
      tagline: 'Track real-time hiring demand',
      description:
        'Our intelligence system monitors high-growth companies with confirmed open headcount and active job postings.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Qualify',
      tagline: 'Direct outreach & screening',
      description:
        'We engage hiring decision-makers, validating their budget, role urgency, and readiness to engage agency partners.',
      icon: CheckCircle2,
    },
    {
      number: '04',
      title: 'Meet',
      tagline: 'Booked directly to your calendar',
      description:
        'You show up to high-intent discovery calls with prepared hiring leaders ready to sign new search mandates.',
      icon: Calendar,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 relative border-t border-[#0B2344] bg-[#05080D] overflow-hidden"
    >
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[350px] bg-[#071A33]/30 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08111F] border border-[#0B2344] text-[#AAB7C7] text-xs font-mono mb-4 shadow-sm">
            <span>Seamless Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#F5F7FA] mb-4">
            How Bridgx Works
          </h2>
          <p className="text-base sm:text-lg text-[#AAB7C7] leading-relaxed font-normal">
            A continuous four-stage connection process engineered to turn active
            hiring demand into signed recruitment agreements.
          </p>
        </div>

        {/* 4 Connected Steps Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-7 rounded-2xl bg-[#08111F] border border-[#0B2344] hover:border-[#1688FF]/50 hover:shadow-[0_0_25px_rgba(7,26,51,0.7)] transition-all duration-200 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-bold text-[#AAB7C7] group-hover:text-[#00D9FF] transition-colors">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0A1930] border border-[#0B2344] flex items-center justify-center text-[#00D9FF] group-hover:border-[#1688FF]/50 transition-colors shadow-[0_0_12px_rgba(0,217,255,0.1)]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-[#F5F7FA] mb-1.5 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-[#00D9FF] mb-3 font-mono">
                      {step.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#AAB7C7] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual Step Indicator Dot */}
                  <div className="mt-8 pt-4 border-t border-[#0B2344] flex items-center justify-between text-xs text-[#AAB7C7] font-mono">
                    <span>Phase {index + 1} of 4</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2344] group-hover:bg-[#00D9FF] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom prompt */}
        <div className="mt-16 text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#AAB7C7] hover:text-[#00D9FF] transition-colors cursor-pointer group"
          >
            <span>Ready to activate your automated client pipeline?</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
