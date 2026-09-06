import React from 'react';
import { Users, Building2 } from 'lucide-react';
import { BridgxLogo } from './BridgxLogo';

export const BridgePlaceholder: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-6 select-none" id="bridge-3d-container">
      <div className="w-full rounded-2xl bg-[#08111F]/90 backdrop-blur-md border border-[#0B2344] p-5 sm:p-6 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(7,26,51,0.6)]">
        
        {/* Minimal 3-Point Label Row */}
        <div className="grid grid-cols-3 items-center gap-2 pb-4 border-b border-[#0B2344] text-center">
          
          {/* Left: Recruiters */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-2 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#0A1930] border border-[#0B2344] flex items-center justify-center text-[#00D9FF] shrink-0 shadow-[0_0_12px_rgba(0,217,255,0.15)]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#F5F7FA] tracking-wide">Recruiters</p>
              <p className="text-[10px] text-[#AAB7C7] font-mono">Agency Search Partners</p>
            </div>
          </div>

          {/* Middle: Neon BRIDGX */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* Ambient Neon Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1688FF] via-[#00D9FF] to-[#1688FF] rounded-full blur-[6px] opacity-75 animate-pulse"></div>
              
              <div className="relative flex items-center justify-center px-4 py-1.5 rounded-full bg-[#05080D] border border-[#00D9FF]/70 shadow-[0_0_20px_rgba(0,217,255,0.4),0_0_10px_rgba(22,136,255,0.6)]">
                <BridgxLogo variant="wordmark" size="sm" theme="dark" showGlow={false} />
              </div>
            </div>
            <span className="text-[10px] text-[#AAB7C7] font-mono mt-1.5 font-semibold tracking-tight">
              The Connection Engine
            </span>
          </div>

          {/* Right: Client Companies */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-2 text-right">
            <div className="order-2 sm:order-1">
              <p className="text-xs sm:text-sm font-bold text-[#F5F7FA] tracking-wide">Client Companies</p>
              <p className="text-[10px] text-[#AAB7C7] font-mono">Hiring Decision-Makers</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#0A1930] border border-[#0B2344] flex items-center justify-center text-[#00D9FF] shrink-0 order-1 sm:order-2 shadow-[0_0_12px_rgba(0,217,255,0.15)]">
              <Building2 className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* 3D Bridge Viewport Placeholder with matching height and badges */}
        <div 
          className="w-full h-[220px] sm:h-[260px] md:h-[280px] mt-3 rounded-xl bg-[#05080D] border border-[#0B2344] relative overflow-hidden shadow-inner flex items-center justify-center"
        >
          {/* Niche Talent with Blinker */}
          <div className="absolute top-3.5 left-4 text-[11px] font-mono text-[#F5F7FA] font-semibold flex items-center gap-2 bg-[#08111F]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#0B2344] shadow-md z-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-90 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.9)]"></span>
            </span>
            <span>Niche Talent</span>
          </div>

          {/* Verified Mandates with Blinker */}
          <div className="absolute top-3.5 right-4 text-[11px] font-mono text-[#F5F7FA] font-semibold flex items-center gap-2 bg-[#08111F]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#0B2344] shadow-md z-10">
            <span>Verified Mandates</span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-90 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.9)]"></span>
            </span>
          </div>

          {/* Lightweight SVG Bridge Silhouette & Pulsing Indicator */}
          <svg
            className="w-full h-full absolute inset-0 pointer-events-none opacity-40"
            viewBox="0 0 800 280"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Ambient Bridge Deck Arc */}
            <path
              d="M 100 210 Q 400 130 700 210"
              stroke="#0B2344"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M 100 210 Q 400 130 700 210"
              stroke="#00D9FF"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-pulse"
            />
            {/* Center Core Halo */}
            <circle cx="400" cy="155" r="28" fill="#00D9FF" fillOpacity="0.08" className="animate-ping" />
            <circle cx="400" cy="155" r="14" fill="#0B2344" stroke="#00D9FF" strokeWidth="1.5" />
          </svg>

          {/* Bottom Status Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-[#08111F]/90 border border-[#0B2344] text-[10px] text-[#AAB7C7] font-mono font-medium shadow-md z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_6px_#00d9ff]" />
            <span>Direct Introduction Highway</span>
          </div>
        </div>

      </div>
    </div>
  );
};
