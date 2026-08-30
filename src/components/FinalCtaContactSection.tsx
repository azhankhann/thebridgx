import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Send, Lock, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

export const FinalCtaContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    agencyName: '',
    niche: 'Technology & Software',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const nicheOptions = [
    'Technology & Software',
    'Finance, Banking & Accounting',
    'Healthcare & Life Sciences',
    'Sales, Marketing & Commercial',
    'Executive & Leadership Search',
    'Engineering & Manufacturing',
    'Legal & Professional Services',
    'Other Specialized Niche',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.agencyName.trim()) {
      setErrorMsg('Please fill in your name, work email, and agency name.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate reliable form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      agencyName: '',
      niche: 'Technology & Software',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative border-t border-[#0B2344] bg-gradient-to-b from-[#05080D] via-[#071A33]/50 to-[#05080D] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[400px] bg-[#071A33]/30 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Persuasive Messaging */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08111F] border border-[#0B2344] text-[#AAB7C7] text-xs font-mono mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>Get Started Today</span>
            </div>

            <h2
              id="final-cta-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#F5F7FA] leading-[1.12] mb-6"
            >
              Your next client could already be hiring.
            </h2>

            <p className="text-base sm:text-lg text-[#AAB7C7] leading-relaxed mb-8 font-normal">
              Connect with companies that have verified open roles right now. Fill
              out the form to claim your first qualified recruitment meeting
              completely free of charge.
            </p>

            {/* Value checklist */}
            <div className="space-y-4 pt-4 border-t border-[#0B2344]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0A1930] text-[#00D9FF] border border-[#0B2344] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,217,255,0.15)]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F7FA]">First meeting 100% Free</h4>
                  <p className="text-xs text-[#AAB7C7]">Zero credit card or payment info required to start.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0A1930] text-[#00D9FF] border border-[#0B2344] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,217,255,0.15)]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F7FA]">Strict Qualification Criteria</h4>
                  <p className="text-xs text-[#AAB7C7]">Verified hiring decision-makers with confirmed budget.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0A1930] text-[#00D9FF] border border-[#0B2344] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,217,255,0.15)]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F7FA]">Rapid 48-Hour Onboarding</h4>
                  <p className="text-xs text-[#AAB7C7]">We calibrate your target profile and launch outreach immediately.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-[#AAB7C7] font-mono">
              <div className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>Confidential</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>Response in &lt; 2 hrs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#08111F] border border-[#0B2344] shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(7,26,51,0.5)] relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A1930] border border-[#00D9FF]/40 text-[#00D9FF] flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F7FA] tracking-tight">
                    Meeting Request Received!
                  </h3>
                  <p className="text-sm text-[#AAB7C7] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F5F7FA]">{formData.name}</strong>. We are matching{' '}
                    <strong className="text-[#F5F7FA]">{formData.agencyName}</strong> with active hiring companies in{' '}
                    <span className="text-[#00D9FF] font-medium">{formData.niche}</span>. A Bridgx specialist will reach out to <strong className="text-[#F5F7FA]">{formData.email}</strong> within 2 hours to confirm your first free client meeting.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl bg-[#0A1930] border border-[#0B2344] text-xs font-semibold text-[#F5F7FA] hover:bg-[#0D2140] hover:border-[#1688FF]/50 transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F7FA] mb-1 tracking-tight">
                      Request Your Free Meeting
                    </h3>
                    <p className="text-xs text-[#AAB7C7] mb-5">
                      Tell us about your agency and the niches you specialize in.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-[#F5F7FA] mb-1.5"
                      >
                        Your Name <span className="text-[#00D9FF]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#05080D] border border-[#0B2344] text-[#F5F7FA] placeholder:text-[#AAB7C7]/40 text-sm focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.2)] focus:bg-[#071A33]/40 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-[#F5F7FA] mb-1.5"
                      >
                        Work Email <span className="text-[#00D9FF]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@agency.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#05080D] border border-[#0B2344] text-[#F5F7FA] placeholder:text-[#AAB7C7]/40 text-sm focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.2)] focus:bg-[#071A33]/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Recruitment Agency & Niche */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="agencyName"
                        className="block text-xs font-medium text-[#F5F7FA] mb-1.5"
                      >
                        Recruitment Agency <span className="text-[#00D9FF]">*</span>
                      </label>
                      <input
                        type="text"
                        id="agencyName"
                        name="agencyName"
                        value={formData.agencyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Talent Partners"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#05080D] border border-[#0B2344] text-[#F5F7FA] placeholder:text-[#AAB7C7]/40 text-sm focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.2)] focus:bg-[#071A33]/40 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="niche"
                        className="block text-xs font-medium text-[#F5F7FA] mb-1.5"
                      >
                        What do you recruit for?
                      </label>
                      <select
                        id="niche"
                        name="niche"
                        value={formData.niche}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#05080D] border border-[#0B2344] text-[#F5F7FA] text-sm focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.2)] transition-all cursor-pointer"
                      >
                        {nicheOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#08111F] text-[#F5F7FA]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-[#F5F7FA] mb-1.5"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify target geography, average placement fees, or specific role requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#05080D] border border-[#0B2344] text-[#F5F7FA] placeholder:text-[#AAB7C7]/40 text-sm focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.2)] focus:bg-[#071A33]/40 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#1688FF] via-[#00D9FF] to-[#1688FF] text-[#05080D] font-bold text-xs tracking-tight shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#05080D] border-t-transparent rounded-full animate-spin" />
                          <span>Securing Your Free Meeting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Your First Meeting Free</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-[#AAB7C7] pt-1">
                    By submitting, you agree to receive qualified meeting updates. No spam, unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
