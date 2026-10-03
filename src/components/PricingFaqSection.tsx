import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Shield } from 'lucide-react';

interface PricingFaqSectionProps {
  onCtaClick: (source?: string) => void;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  bestFor: string;
  whatsIncluded: string;
}

interface PricingCategory {
  id: string;
  categoryTitle: string;
  focus: string;
  tiers: PricingTier[];
}

export const PricingFaqSection: React.FC<PricingFaqSectionProps> = ({ onCtaClick }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pricingCategories: PricingCategory[] = [
    {
      id: 'staffing-agencies',
      categoryTitle: 'Category 1: Staffing Agencies',
      focus: 'Contract, temp, and volume workforce solutions.',
      tiers: [
        {
          name: 'Tier 1 — Standard Roles',
          price: '$99',
          period: '/ Meeting',
          bestFor: 'Light industrial, general staffing, administrative, and frontline contract roles.',
          whatsIncluded:
            'Outbound sequencing to operations managers and facility leads needing immediate high-volume headcount.',
        },
        {
          name: 'Tier 2 — Specialized / Senior Staffing',
          price: '$149',
          period: '/ Meeting',
          bestFor:
            'IT/Tech staff augmentation, healthcare/clinical staffing, and specialized engineering contractors.',
          whatsIncluded:
            'Advanced targeting for hard-to-reach technical department heads, project directors, and clinical coordinators.',
        },
      ],
    },
    {
      id: 'recruitment-agencies',
      categoryTitle: 'Category 2: Recruitment Agencies',
      focus: 'Permanent placement and direct-hire search.',
      tiers: [
        {
          name: 'Tier 1 — Middle to Senior-Level Roles',
          price: '$149',
          period: '/ Meeting',
          bestFor:
            'Standard permanent recruitment campaigns targeting mid-management, department heads, and professional roles.',
          whatsIncluded:
            'Outbound targeting to HR directors, hiring managers, and department leads with active permanent headcount budgets.',
        },
        {
          name: 'Tier 2 — Executive-Level Roles',
          price: '$199',
          period: '/ Meeting',
          bestFor: 'C-suite, VP-level, and executive search mandates.',
          whatsIncluded:
            'Highly bespoke, white-glove executive headhunting to book meetings directly with Board members, Founders, and C-level executives.',
        },
      ],
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#071A33]/35 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08111F] border border-[#0B2344] text-[#AAB7C7] text-xs font-mono mb-4 shadow-sm">
            <span>Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#F5F7FA]">
            PRICING
          </h2>
        </div>

        {/* Pricing Categories */}
        <div className="space-y-12 mb-24 max-w-6xl mx-auto">
          {pricingCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#08111F] border border-[#0B2344] relative shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F7FA]">
                      {category.categoryTitle}
                    </h3>
                  </div>
                  <div className="md:text-right max-w-md">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] font-semibold block mb-1">
                      Focus:
                    </span>
                    <p className="text-sm sm:text-base text-[#F5F7FA] font-medium leading-snug">
                      {category.focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tiers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {category.tiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl p-7 lg:p-8 flex flex-col justify-between bg-[#08111F] border border-[#0B2344] hover:border-[#1688FF]/50 transition-all duration-200 shadow-sm relative"
                  >
                    <div>
                      {/* Tier Name */}
                      <h4 className="text-xl font-bold text-[#F5F7FA] tracking-tight mb-4">
                        {tier.name}
                      </h4>

                      {/* Price Display */}
                      <div className="mb-6 pb-6 border-b border-[#0B2344]">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7FA]">
                            {tier.price}
                          </span>
                          <span className="text-sm font-mono text-[#AAB7C7]">
                            {tier.period}
                          </span>
                        </div>
                      </div>

                      {/* Best for */}
                      <div className="mb-5">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] font-semibold block mb-1.5">
                          Best for:
                        </span>
                        <p className="text-sm text-[#AAB7C7] leading-relaxed">
                          {tier.bestFor}
                        </p>
                      </div>

                      {/* What's included */}
                      <div className="mb-8">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] font-semibold block mb-1.5">
                          What's included:
                        </span>
                        <p className="text-sm text-[#AAB7C7] leading-relaxed">
                          {tier.whatsIncluded}
                        </p>
                      </div>
                    </div>

                    {/* Card Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onCtaClick(`pricing_${category.id}_tier_${idx + 1}`)}
                        className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 bg-[#0A1930] text-[#F5F7FA] hover:bg-[#0D2140] border border-[#0B2344] hover:border-[#1688FF]/50 hover:text-[#00D9FF] active:scale-[0.99]"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
