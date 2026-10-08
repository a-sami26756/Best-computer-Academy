import React from 'react';

interface BcaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gold' | 'light' | 'dark';
  showSubtitle?: boolean;
}

export const BcaLogo: React.FC<BcaLogoProps> = ({ 
  size = 'md', 
  variant = 'dark',
  showSubtitle = true 
}) => {
  const iconDimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  }[size];

  const isLight = variant === 'light';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Golden Computer Monitor with Graduation Cap & Open Book (Matching Official Poster) */}
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20`}>
        <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center overflow-hidden relative">
          {/* Subtle gold glow behind icon */}
          <div className="absolute inset-0 bg-radial from-amber-500/20 to-transparent" />
          
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full p-1.5 text-amber-400 drop-shadow-[0_2px_4px_rgba(245,158,11,0.5)]" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Crown / Top Accent */}
            <path 
              d="M38 18 L50 24 L62 18 L58 28 L42 28 Z" 
              fill="url(#goldGrad)" 
            />
            {/* Graduation Cap / Mortarboard */}
            <polygon 
              points="50,22 76,33 50,44 24,33" 
              fill="url(#goldGrad)" 
            />
            <polygon 
              points="50,44 70,36 70,42 50,50 30,42 30,36" 
              fill="#d97706" 
            />
            {/* Tassel */}
            <line x1="68" y1="36" x2="72" y2="48" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
            <circle cx="72" cy="49" r="2" fill="#fef08a" />

            {/* Computer Monitor Screen Frame */}
            <rect 
              x="20" y="44" width="60" height="38" rx="4" 
              stroke="url(#goldGrad)" strokeWidth="3" fill="#0f172a" 
            />
            {/* Inner Monitor Bezel Display */}
            <rect x="25" y="48" width="50" height="28" rx="2" fill="#020617" />
            
            {/* Open Book Pages Inside Screen */}
            <path 
              d="M30 68 Q40 64 50 67 Q60 64 70 68 L68 54 Q59 51 50 54 Q41 51 32 54 Z" 
              fill="url(#goldGrad)" 
            />
            {/* Monitor Stand */}
            <path d="M45 82 L42 90 L58 90 L55 82 Z" fill="url(#goldGrad)" />
            <line x1="36" y1="90" x2="64" y2="90" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography: "Best COMPUTER — ACADEMY —" */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-lg sm:text-xl tracking-tight leading-none">
            Best
          </span>
          <span className={`font-display font-black tracking-wider text-base sm:text-lg uppercase leading-none ${isLight ? 'text-slate-900' : 'text-white drop-shadow-xs'}`}>
            COMPUTER
          </span>
        </div>

        {/* — ACADEMY — with flanking lines */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1px] w-3 bg-gradient-to-r from-transparent to-amber-500" />
          <span className={`text-[10px] sm:text-[11px] font-black tracking-[0.22em] uppercase leading-none ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>
            ACADEMY
          </span>
          <span className="h-[1px] w-3 bg-gradient-to-l from-transparent to-amber-500" />
        </div>

        {showSubtitle && (
          <span className={`text-[9px] font-semibold tracking-wider uppercase mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            LEARN • SKILL • GROW
          </span>
        )}
      </div>
    </div>
  );
};
