import React, { useState } from 'react';
import { Check, ChevronDown, Sparkles, HelpCircle, ArrowRight, Shield } from 'lucide-react';

interface PricingFaqSectionProps {
  onCtaClick: () => void;
}

export const PricingFaqSection: React.FC<PricingFaqSectionProps> = ({ onCtaClick }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pricingTiers = [
    {
      name: 'First Qualified Meeting',
      badge: 'FIRST MEETING FREE',
      price: '$0',
      period: 'your first meeting',
      description: 'Your first qualified meeting is completely on us.',
      highlight: true,
      features: [
        'Verified hiring opportunity',
        'Relevant decision-maker',
        'Active hiring need',
        'Direct meeting booking',
        'No upfront commitment',
      ],
      ctaText: 'Claim Your Free Meeting',
    },
    {
      name: 'Standard / Mid-Level',
      price: '$149',
      period: '/ qualified meeting',
      description: 'For specialist and mid-level hiring needs.',
      highlight: false,
      features: [
        'Verified hiring opportunity',
        'Relevant decision-maker',
        'Role & hiring need confirmed',
        'Niche & geography matched',
        'Direct calendar booking',
      ],
      ctaText: 'Get Started',
    },
    {
      name: 'Senior / Executive',
      price: '$199',
      period: '/ qualified meeting',
      description: 'For senior leadership and executive hiring needs.',
      highlight: false,
      features: [
        'Verified decision-maker',
        'Active executive hiring need',
        'Role & requirements confirmed',
        'Targeted company matching',
        'Direct calendar booking',
      ],
      ctaText: 'Get Started',
    },
  ];

  const faqs = [
    {
      question: 'What counts as a qualified meeting?',
      answer:
        'A meeting is qualified ONLY when: (1) You meet directly with an authorized hiring decision-maker (e.g. Founder, VP, Department Head, or Head of Talent); (2) The company has verified, funded, open hiring requirements in your specific niche; and (3) The prospect attends the call and is open to engaging an external recruitment agency partner. If any of these conditions are not met, the meeting is disqualified and you are not charged.',
    },
    {
      question: 'Do I have to sign a monthly contract?',
      answer:
        'No. Bridgx operates on a 100% pay-per-meeting basis. There are no monthly retainers, no annual commitments, and no minimum spend requirements. You can scale your meeting volume up or down at any time based on your agency capacity.',
    },
    {
      question: 'How do you find companies that are hiring?',
      answer:
        'We combine proprietary growth-signal monitoring (tracking active job listings, recent funding rounds, team expansion velocity, and new department formations) with targeted, personalized human outreach. We engage decision-makers at the exact moment they experience hiring bottlenecks.',
    },
    {
      question: 'Which recruitment niches do you work with?',
      answer:
        'We work across all major specialized recruitment verticals, including Technology & Software Engineering, Finance & Private Equity, Healthcare & Biotech, Sales & Marketing, Construction & Engineering, and Executive Search. During onboarding, we calibrate the targeting to your exact specialty.',
    },
    {
      question: 'What happens after my first meeting?',
      answer:
        'Your first qualified meeting is 100% free with no obligation. After experiencing the call and evaluating the client lead, you decide if and when you want to receive additional qualified meetings on our standard pay-per-meeting rates. You remain in full control of your volume.',
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 relative border-t border-[#0B2344] bg-[#05080D] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#071A33]/35 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08111F] border border-[#0B2344] text-[#AAB7C7] text-xs font-mono mb-4 shadow-sm">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#F5F7FA] mb-4">
            Pay Only For Results
          </h2>
          <p className="text-base sm:text-lg text-[#AAB7C7] leading-relaxed font-normal">
            No retainers. No setup fees. Try your first qualified meeting for free.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-24">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#08111F] via-[#0A1930] to-[#08111F] border-2 border-[#00D9FF]/70 shadow-[0_0_35px_rgba(0,217,255,0.2),0_12px_40px_rgba(0,0,0,0.8)] scale-100 lg:-translate-y-2'
                  : 'bg-[#08111F] border border-[#0B2344] hover:border-[#1688FF]/50 shadow-sm'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#1688FF] text-[#05080D] text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,217,255,0.6)]">
                  <Sparkles className="w-3 h-3 text-[#05080D]" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#F5F7FA] tracking-tight">
                    {tier.name}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7FA]">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs font-mono text-[#AAB7C7]">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#AAB7C7] mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-[#0B2344] mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F7FA]">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        tier.highlight
                          ? 'bg-[#00D9FF] text-[#05080D]'
                          : 'bg-[#0A1930] border border-[#0B2344] text-[#00D9FF]'
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Button */}
              <button
                onClick={onCtaClick}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-[#1688FF] via-[#00D9FF] to-[#1688FF] text-[#05080D] font-bold shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] hover:brightness-110 active:scale-[0.99]'
                    : 'bg-[#0A1930] text-[#F5F7FA] hover:bg-[#0D2140] border border-[#0B2344] hover:border-[#1688FF]/50 active:scale-[0.99]'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Compact FAQ Accordion */}
        <div id="faq" className="max-w-3xl mx-auto pt-8 border-t border-[#0B2344]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08111F] border border-[#0B2344] text-[#AAB7C7] text-xs font-mono mb-3 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] tracking-tight">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#08111F] border border-[#0B2344] overflow-hidden transition-colors hover:border-[#1688FF]/40 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#F5F7FA]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#AAB7C7] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00D9FF]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#AAB7C7] leading-relaxed border-t border-[#0B2344]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Guarantee Reassurance */}
          <div className="mt-10 p-4 rounded-xl bg-[#08111F] border border-[#0B2344] flex items-center gap-3 text-xs text-[#AAB7C7] shadow-sm">
            <Shield className="w-4 h-4 text-[#00D9FF] shrink-0" />
            <span>
              <strong className="text-[#F5F7FA]">100% Quality Assurance:</strong> If a meeting does not meet
              our documented qualification criteria, you will never be charged.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
