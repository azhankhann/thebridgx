import React from 'react';
import { OpeningIntroAnimation } from './components/OpeningIntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyBridgxSection } from './components/WhyBridgxSection';
import { PricingFaqSection } from './components/PricingFaqSection';
import { FinalCtaContactSection } from './components/FinalCtaContactSection';
import { Footer } from './components/Footer';
import { trackEvent } from './lib/analytics';

export default function App() {
  const scrollToContact = (source: string = 'cta') => {
    trackEvent('get_first_meeting_free_click', {
      button_location: source,
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // If there's an input, focus on the name field
      const nameInput = document.getElementById('name');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#05080D] text-[#F5F7FA] flex flex-col selection:bg-[#1688FF]/30 selection:text-white">
      {/* Opening Intro Animation (plays once on initial load, ~1.1s) */}
      <OpeningIntroAnimation />

      {/* 1. Navbar */}
      <Navbar onCtaClick={scrollToContact} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero onCtaClick={scrollToContact} />

        {/* 3. Problem */}
        <ProblemSection onCtaClick={scrollToContact} />

        {/* 4. How Bridgx Works */}
        <HowItWorksSection onCtaClick={scrollToContact} />

        {/* 5. Why Bridgx */}
        <WhyBridgxSection onCtaClick={scrollToContact} />

        {/* 6. Pricing + FAQ */}
        <PricingFaqSection onCtaClick={scrollToContact} />

        {/* 7. Final CTA + Contact Form */}
        <FinalCtaContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
