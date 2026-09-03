import React from 'react';
import { UserX, Clock, PhoneOff, AlertTriangle, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick: (source?: string) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onCtaClick }) => {
  const painPoints = [
    {
      icon: Clock,
      title: '60% of Time Lost to Cold Outreach',
      description:
        'Your top billing recruiters spend hours scraping job boards, sending cold InMails, and chasing unresponsive prospects instead of sourcing and interviewing candidates.',
    },
    {
      icon: PhoneOff,
      title: 'Chasing Companies Not Hiring',
      description:
        'Reaching out to dormant organizations or frozen hiring teams burns morale and results in generic gatekeeper rejection.',
    },
    {
      icon: UserX,
      title: 'Distracted Focus & Slower Placements',
      description:
        'When recruiters are forced into sales and SDR roles, placement cycle times double and candidate relationships suffer.',
    },
  ];

  return (
    <section
      id="problem"
      className="py-24 md:py-32 relative border-t border-[#0B2344] bg-gradient-to-b from-[#05080D] via-[#071A33]/40 to-[#05080D] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-[#0B2344]/25 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08111F] border border-[#0B2344] text-[#AAB7C7] text-xs font-mono mb-5 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>The Agency Dilemma</span>
          </div>

          <h2
            id="problem-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#F5F7FA] leading-tight mb-6"
          >
            Your recruiters should be filling roles,{' '}
            <span className="text-[#AAB7C7] font-semibold block sm:inline">
              not chasing clients.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#AAB7C7] leading-relaxed font-normal">
            Recruitment agencies thrive when their consultants focus on what they do
            best: matching top-tier talent with open client mandates. But without a
            reliable stream of new business, recruiters spend half their week on
            unpredictable business development and cold prospecting.
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-7 sm:p-8 rounded-2xl bg-[#08111F] border border-[#0B2344] hover:border-[#1688FF]/40 hover:shadow-[0_0_25px_rgba(7,26,51,0.6)] transition-all duration-200 relative group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A1930] border border-[#0B2344] flex items-center justify-center text-[#00D9FF] mb-6 group-hover:border-[#1688FF]/50 transition-colors shadow-[0_0_12px_rgba(0,217,255,0.1)]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#F5F7FA] mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#AAB7C7] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Bridgx Solution Callout */}
        <div className="rounded-2xl p-7 sm:p-9 bg-gradient-to-r from-[#08111F] via-[#0A1930] to-[#08111F] border border-[#1688FF]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(22,136,255,0.1)]">
          <div className="max-w-2xl">
            <h4 className="text-xs font-semibold text-[#00D9FF] mb-1.5 font-mono uppercase tracking-wider">
              The Bridgx Solution
            </h4>
            <p className="text-lg font-bold text-[#F5F7FA] mb-1.5 tracking-tight">
              We bridge the gap between active hiring demand and your agency expertise.
            </p>
            <p className="text-sm text-[#AAB7C7] leading-relaxed">
              We deliver pre-screened hiring managers with verified vacancies directly
              to your calendar so your team can focus 100% on delivery and placement.
            </p>
          </div>
          <button
            onClick={() => onCtaClick('problem_section')}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0B2344] via-[#0D305C] to-[#1688FF] text-white font-semibold text-xs tracking-tight border border-[#1688FF]/40 shadow-[0_0_15px_rgba(22,136,255,0.25)] hover:shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:border-[#00D9FF]/70 transition-all cursor-pointer"
          >
            <span>Get Your First Meeting Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
