import React from 'react';

interface BridgxLogoProps {
  variant?: 'wordmark' | 'emblem' | 'badge';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  showGlow?: boolean;
}

export const BridgxEmblem: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  showGlow?: boolean;
}> = ({ className = 'w-8 h-8', theme = 'dark', showGlow = true }) => {
  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0 select-none overflow-visible`}
    >
      <defs>
        {/* Left Wing Gradient: Neon Cyan to Electric Royal Blue */}
        <linearGradient id="emblem-blue-grad" x1="25" y1="25" x2="116" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D9FF" />
          <stop offset="45%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#0047BA" />
        </linearGradient>

        {/* Right Wing Dark Gradient for Dark Canvas */}
        <linearGradient id="emblem-navy-dark" x1="124" y1="25" x2="215" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D2E59" />
          <stop offset="50%" stopColor="#071A33" />
          <stop offset="100%" stopColor="#040C1A" />
        </linearGradient>

        {/* Right Wing Dark Gradient for Light Canvas */}
        <linearGradient id="emblem-navy-light" x1="124" y1="25" x2="215" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#061224" />
        </linearGradient>

        {/* Neon Glow Filter */}
        <filter id="emblem-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient Neon Backglow */}
      {showGlow && (
        <g opacity="0.35" filter="url(#emblem-glow)">
          <path
            d="M 28 28 L 72 28 L 116 75 L 116 85 C 88 85, 60 102, 54 132 L 26 132 C 38 100, 68 78, 116 75 Z"
            fill="#00D9FF"
          />
        </g>
      )}

      {/* LEFT WING - Dual-Tone Geometric Blue Bridge Half */}
      <g id="left-wing">
        {/* Main Solid Shape */}
        <path
          d="M 28 28 
             L 76 28 
             L 116 74 
             L 116 84 
             C 86 84, 62 100, 56 132 
             L 26 132 
             C 38 98, 68 78, 116 74.5 
             L 28 28 Z"
          fill="url(#emblem-blue-grad)"
        />

        {/* Sleek Top-Edge Highlight Line */}
        <path
          d="M 30 29 L 74 29 L 114 74"
          stroke="#A6F4FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>

      {/* RIGHT WING - Dual-Tone Geometric Navy/Black Bridge Half (Mirrored across X = 120) */}
      <g id="right-wing">
        {/* Main Solid Shape */}
        <path
          d="M 212 28 
             L 164 28 
             L 124 74 
             L 124 84 
             C 154 84, 178 100, 184 132 
             L 214 132 
             C 202 98, 172 78, 124 74.5 
             L 212 28 Z"
          fill={theme === 'dark' ? 'url(#emblem-navy-dark)' : 'url(#emblem-navy-light)'}
          stroke={theme === 'dark' ? '#1688FF' : '#0B1F3A'}
          strokeWidth={theme === 'dark' ? '1.2' : '0.5'}
          strokeOpacity={theme === 'dark' ? '0.6' : '0.2'}
        />

        {/* Electric Cyan Edge for Dark Themes */}
        {theme === 'dark' && (
          <path
            d="M 210 29 L 166 29 L 126 74"
            stroke="#38BDF8"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.5"
          />
        )}
      </g>
    </svg>
  );
};

export const BridgxLogo: React.FC<BridgxLogoProps> = ({
  variant = 'wordmark',
  size = 'md',
  className = '',
  theme = 'dark',
  showGlow = true,
}) => {
  // Dimension tokens
  const sizeMap = {
    xs: { emblem: 'w-4 h-4', text: 'text-base', emblemInline: 'w-4 h-3.5' },
    sm: { emblem: 'w-6 h-6', text: 'text-lg sm:text-xl', emblemInline: 'w-6 h-5' },
    md: { emblem: 'w-8 h-8', text: 'text-2xl', emblemInline: 'w-7 h-5.5' },
    lg: { emblem: 'w-10 h-10', text: 'text-3xl', emblemInline: 'w-9 h-7' },
    xl: { emblem: 'w-14 h-14', text: 'text-4xl sm:text-5xl', emblemInline: 'w-12 h-9.5' },
  }[size];

  const currentTheme = theme === 'auto' ? 'dark' : theme;
  const textColor = currentTheme === 'dark' ? 'text-[#F5F7FA]' : 'text-[#0B1F3A]';

  // 1. EMBLEM ONLY
  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <BridgxEmblem className={sizeMap.emblem} theme={currentTheme} showGlow={showGlow} />
      </div>
    );
  }

  // 2. BADGE STYLE (Emblem inside navy card box + Wordmark)
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 ${className} group`}>
        <div className="w-9 h-9 rounded-xl bg-[#08111F] border border-[#0B2344] p-1.5 flex items-center justify-center text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.15)] group-hover:border-[#1688FF]/50 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all">
          <BridgxEmblem className="w-full h-full" theme={currentTheme} showGlow={showGlow} />
        </div>
        <div className="flex items-center tracking-tight">
          <span className={`${sizeMap.text} font-extrabold ${textColor} tracking-tight font-sans`}>
            Bridg
          </span>
          <span className={`${sizeMap.text} font-black text-[#00D9FF] [text-shadow:0_0_12px_rgba(0,217,255,0.7)] ml-[1px]`}>
            X
          </span>
        </div>
      </div>
    );
  }

  // 3. WORDMARK WITH INTEGRATED GEOMETRIC X (Exact match to uploaded logo image)
  return (
    <div className={`inline-flex items-center tracking-tight ${className} select-none group`}>
      <span className={`${sizeMap.text} font-extrabold ${textColor} tracking-tight font-sans`}>
        Bridg
      </span>
      <div className="inline-flex items-center ml-0.5 transform transition-transform duration-200 group-hover:scale-105">
        <BridgxEmblem
          className={sizeMap.emblemInline}
          theme={currentTheme}
          showGlow={showGlow}
        />
      </div>
    </div>
  );
};

export default BridgxLogo;

