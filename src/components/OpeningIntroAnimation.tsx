import React, { useState, useEffect } from 'react';
import { BridgxEmblem } from './BridgxLogo';

interface OpeningIntroAnimationProps {
  onComplete?: () => void;
}

export const OpeningIntroAnimation: React.FC<OpeningIntroAnimationProps> = ({ onComplete }) => {
  // Animation phases:
  // 1. 'initial': Dark canvas (~0 - 200ms)
  // 2. 'logo': Cinematic reveal of wordmark & emblem (~200ms - 950ms)
  //    (Intentional pause: 950ms - 1150ms)
  // 3. 'bridge': Glowing bridge line animates across the span (~1150ms - 1950ms)
  // 4. 'revealed': Keystone beacon & tagline illuminate, full lockup rests (~1950ms - 2300ms)
  // 5. 'exiting': Smooth cinematic dissolve into the already-rendered hero (~2300ms - 2850ms)
  // 6. 'done': Fully unmounted from DOM (~2850ms)
  const [phase, setPhase] = useState<'initial' | 'logo' | 'bridge' | 'revealed' | 'exiting' | 'done'>('initial');

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

    // Stage 1: Reveal logo with a smooth upward float & fade (starts at 180ms)
    const t1 = setTimeout(() => {
      setPhase('logo');
    }, 180);

    // Stage 2: After a brief pause for logo absorption, start drawing the glowing bridge line (at 1100ms)
    const t2 = setTimeout(() => {
      setPhase('bridge');
    }, 1100);

    // Stage 3: Keystone center beacon activates and tagline gracefully emerges (at 1900ms)
    const t3 = setTimeout(() => {
      setPhase('revealed');
    }, 1900);

    // Stage 4: Cinematic dissolve out into hero section (at 2300ms)
    const t4 = setTimeout(() => {
      setPhase('exiting');
    }, 2300);

    // Stage 5: Unmount component completely from DOM (at 2850ms, ~2.8s total duration)
    const t5 = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 2850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (phase === 'done') {
    return null;
  }

  const isLogoVisible = phase !== 'initial';
  const isBridgeDrawn = phase === 'bridge' || phase === 'revealed' || phase === 'exiting';
  const isFullyRevealed = phase === 'revealed' || phase === 'exiting';
  const isExiting = phase === 'exiting';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05080D] overflow-hidden select-none pointer-events-none"
      style={{
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'translate3d(0, 0, 0) scale(1.025)' : 'translate3d(0, 0, 0) scale(1)',
        transition: 'opacity 550ms cubic-bezier(0.16, 1, 0.3, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {/* Background subtle ambient radial glow - GPU accelerated with opacity only */}
      <div
        className="absolute w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full pointer-events-none blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.12) 0%, rgba(22, 136, 255, 0.05) 50%, transparent 75%)',
          opacity: isLogoVisible ? 0.85 : 0.1,
          transform: 'translate3d(0, 0, 0)',
          transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'opacity',
        }}
      />

      {/* Center Lockup Container */}
      <div className="relative z-10 flex flex-col items-center px-4">
        
        {/* Brand Wordmark & Emblem */}
        <div
          className="flex items-center tracking-tight"
          style={{
            opacity: isLogoVisible ? 1 : 0,
            transform: isLogoVisible
              ? 'translate3d(0, 0, 0) scale(1)'
              : 'translate3d(0, 8px, 0) scale(0.97)',
            transition:
              'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1), transform 750ms cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'opacity, transform',
          }}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F7FA] font-sans tracking-tight">
            Bridg
          </span>
          <div className="inline-flex items-center ml-1 sm:ml-1.5 relative">
            {/* Ambient pulse halo behind X - strictly transform & opacity for smooth 60fps */}
            <div
              className="absolute -inset-2 bg-[#00D9FF] rounded-full blur-md pointer-events-none"
              style={{
                opacity: isFullyRevealed ? 0.45 : isLogoVisible ? 0.2 : 0,
                transform: isFullyRevealed
                  ? 'translate3d(0, 0, 0) scale(1.15)'
                  : 'translate3d(0, 0, 0) scale(0.9)',
                transition:
                  'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'opacity, transform',
              }}
            />
            <BridgxEmblem
              className="w-10 h-7 sm:w-12 h-9 md:w-14 md:h-10 relative z-10"
              theme="dark"
              showGlow={true}
            />
          </div>
        </div>

        {/* Thin Glowing Bridge Line Animation (Pure vector-based with multi-layered glow, zero heavy filters) */}
        <div className="relative w-[280px] sm:w-[380px] md:w-[440px] h-12 mt-1 sm:mt-2 flex items-center justify-center">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bridge-intro-line-grad" x1="20" y1="24" x2="420" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0B2344" stopOpacity="0.4" />
                <stop offset="20%" stopColor="#1688FF" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#00D9FF" stopOpacity="1" />
                <stop offset="80%" stopColor="#1688FF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0B2344" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="bridge-soft-glow-grad" x1="20" y1="24" x2="420" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0B2344" stopOpacity="0" />
                <stop offset="25%" stopColor="#1688FF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#00D9FF" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#1688FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0B2344" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Faint Architectural Guide Arc */}
            <path
              d="M 20 36 Q 220 12 420 36"
              stroke="#0B2344"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.35"
            />

            {/* Layer 1: Wide Ambient Glow Trace (hardware-accelerated, replaces heavy SVG raster blur) */}
            <path
              d="M 20 36 Q 220 12 420 36"
              stroke="url(#bridge-soft-glow-grad)"
              strokeWidth="6"
              strokeLinecap="round"
              style={{
                strokeDasharray: 440,
                strokeDashoffset: isBridgeDrawn ? 0 : 220,
                opacity: isBridgeDrawn ? 0.8 : 0,
                transition:
                  'stroke-dashoffset 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease-out',
                willChange: 'stroke-dashoffset, opacity',
              }}
            />

            {/* Layer 2: Main Glowing Bridge Transit Line */}
            <path
              d="M 20 36 Q 220 12 420 36"
              stroke="url(#bridge-intro-line-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{
                strokeDasharray: 440,
                strokeDashoffset: isBridgeDrawn ? 0 : 220,
                opacity: isBridgeDrawn ? 1 : 0,
                transition:
                  'stroke-dashoffset 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease-out',
                willChange: 'stroke-dashoffset, opacity',
              }}
            />

            {/* Layer 3: Ultra-Crisp Core Ray */}
            <path
              d="M 20 36 Q 220 12 420 36"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              style={{
                strokeDasharray: 440,
                strokeDashoffset: isBridgeDrawn ? 0 : 220,
                opacity: isBridgeDrawn ? 0.6 : 0,
                transition:
                  'stroke-dashoffset 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease-out',
                willChange: 'stroke-dashoffset, opacity',
              }}
            />

            {/* Left Anchor Node */}
            <circle
              cx="20"
              cy="36"
              r="2.5"
              fill="#1688FF"
              style={{
                opacity: isBridgeDrawn ? 0.9 : 0,
                transition: 'opacity 400ms ease-out 300ms',
              }}
            />

            {/* Right Anchor Node */}
            <circle
              cx="420"
              cy="36"
              r="2.5"
              fill="#1688FF"
              style={{
                opacity: isBridgeDrawn ? 0.9 : 0,
                transition: 'opacity 400ms ease-out 300ms',
              }}
            />

            {/* Center Keystone Beacon - Soft Halo Outer */}
            <circle
              cx="220"
              cy="24"
              r="7"
              fill="#00D9FF"
              style={{
                opacity: isFullyRevealed ? 0.25 : 0,
                transform: isFullyRevealed ? 'scale(1)' : 'scale(0.5)',
                transformOrigin: '220px 24px',
                transition:
                  'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Center Keystone Beacon - Core Light */}
            <circle
              cx="220"
              cy="24"
              r="3.5"
              fill="#00D9FF"
              style={{
                opacity: isFullyRevealed ? 1 : 0,
                transform: isFullyRevealed ? 'scale(1)' : 'scale(0.6)',
                transformOrigin: '220px 24px',
                transition:
                  'opacity 450ms cubic-bezier(0.16, 1, 0.3, 1), transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </svg>
        </div>

        {/* Tagline: The Connection Engine - animated strictly with transform & opacity */}
        <div
          style={{
            opacity: isFullyRevealed ? 0.75 : 0,
            transform: isFullyRevealed ? 'translate3d(0, 0, 0)' : 'translate3d(0, 4px, 0)',
            transition:
              'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'opacity, transform',
          }}
        >
          <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#AAB7C7] -mt-1">
            The Connection Engine
          </p>
        </div>

      </div>
    </div>
  );
};

export default OpeningIntroAnimation;
