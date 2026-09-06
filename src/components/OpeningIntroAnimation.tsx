import React, { useState, useEffect } from 'react';
import { BridgxEmblem } from './BridgxLogo';

interface OpeningIntroAnimationProps {
  onComplete?: () => void;
}

export const OpeningIntroAnimation: React.FC<OpeningIntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'connecting' | 'revealed' | 'exiting' | 'done'>('initial');

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPhase('done');
      onComplete?.();
      return;
    }

    // Step 1: Initial dark canvas with gentle logo reveal (0 -> 250ms)
    const t1 = setTimeout(() => {
      setPhase('connecting');
    }, 200);

    // Step 2: Glowing bridge line connects into the wordmark (200 -> 700ms)
    const t2 = setTimeout(() => {
      setPhase('revealed');
    }, 650);

    // Step 3: Smooth transition into hero section (at ~1.05s)
    const t3 = setTimeout(() => {
      setPhase('exiting');
    }, 1100);

    // Step 4: Completely unmount and notify completion (at ~1.5s)
    const t4 = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (phase === 'done') {
    return null;
  }

  const isExiting = phase === 'exiting';
  const isConnectingOrLater = phase === 'connecting' || phase === 'revealed' || phase === 'exiting';
  const isRevealedOrLater = phase === 'revealed' || phase === 'exiting';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05080D] overflow-hidden select-none pointer-events-none transition-all duration-450 ease-out ${
        isExiting ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
      }`}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Background subtle radial glow */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[90px] transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.12) 0%, rgba(22, 136, 255, 0.05) 50%, transparent 75%)',
          opacity: isConnectingOrLater ? 1 : 0.2,
        }}
      />

      {/* Center Container */}
      <div className="relative z-10 flex flex-col items-center px-4">
        
        {/* Brand Wordmark & Emblem */}
        <div 
          className={`flex items-center tracking-tight transition-all duration-500 ease-out transform ${
            isConnectingOrLater ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
          }`}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F7FA] font-sans tracking-tight">
            Bridg
          </span>
          <div className="inline-flex items-center ml-1 sm:ml-1.5 relative">
            {/* Ambient pulse halo behind X */}
            <div 
              className={`absolute -inset-2 bg-[#00D9FF] rounded-full blur-md transition-opacity duration-500 ${
                isRevealedOrLater ? 'opacity-50' : 'opacity-10'
              }`}
            />
            <BridgxEmblem
              className="w-10 h-7 sm:w-12 h-9 md:w-14 md:h-10 relative z-10"
              theme="dark"
              showGlow={true}
            />
          </div>
        </div>

        {/* Thin Glowing Bridge Line Animation */}
        <div className="relative w-[280px] sm:w-[380px] md:w-[440px] h-12 mt-1 sm:mt-2 flex items-center justify-center">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bridge-intro-line-grad" x1="20" y1="24" x2="420" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0B2344" stopOpacity="0.3" />
                <stop offset="25%" stopColor="#1688FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00D9FF" stopOpacity="1" />
                <stop offset="75%" stopColor="#1688FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0B2344" stopOpacity="0.3" />
              </linearGradient>

              <filter id="bridge-line-glow" x="-20%" y="-100%" width="140%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Faint Guide Arc */}
            <path
              d="M 20 36 Q 220 12 420 36"
              stroke="#0B2344"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Main Glowing Bridge Line that animates outward across the span */}
            <path
              d="M 20 36 Q 220 12 420 36"
              stroke="url(#bridge-intro-line-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#bridge-line-glow)"
              style={{
                strokeDasharray: 440,
                strokeDashoffset: isConnectingOrLater ? 0 : 220,
                transition: 'stroke-dashoffset 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: isConnectingOrLater ? 1 : 0,
              }}
            />

            {/* Left Anchor Dot */}
            <circle
              cx="20"
              cy="36"
              r="2.5"
              fill="#1688FF"
              className={`transition-opacity duration-300 ${isConnectingOrLater ? 'opacity-90' : 'opacity-0'}`}
            />

            {/* Right Anchor Dot */}
            <circle
              cx="420"
              cy="36"
              r="2.5"
              fill="#1688FF"
              className={`transition-opacity duration-300 ${isConnectingOrLater ? 'opacity-90' : 'opacity-0'}`}
            />

            {/* Center Bridge Keystone Beacon */}
            <circle
              cx="220"
              cy="24"
              r="3.5"
              fill="#00D9FF"
              className={`transition-all duration-400 ${
                isRevealedOrLater ? 'opacity-100 scale-125' : 'opacity-0 scale-75'
              }`}
              style={{ filter: 'drop-shadow(0 0 6px #00D9FF)' }}
            />
          </svg>
        </div>

        {/* Minimal subtitle tag */}
        <p
          className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#AAB7C7] transition-all duration-500 ease-out -mt-1 ${
            isRevealedOrLater ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
        >
          The Connection Engine
        </p>

      </div>
    </div>
  );
};

export default OpeningIntroAnimation;
