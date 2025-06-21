'use client';
import { useState } from 'react';

export default function Mascot() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center group cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={0}
      aria-label="Mascot tư vấn"
    >
      {/* Yarn Ball Mascot */}
      <div className={`transition-transform duration-300 ${hover ? 'animate-wave' : ''}`}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#FDEBD0" stroke="#F5B041" strokeWidth="4"/>
          <path d="M18 32c8-10 20-10 28 0" stroke="#F5B041" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 44c6-8 14-8 20 0" stroke="#F5B041" strokeWidth="3" strokeLinecap="round"/>
          <path d="M28 20c2 2 8 2 10 0" stroke="#F5B041" strokeWidth="3" strokeLinecap="round"/>
          {/* Eye left */}
          <ellipse cx="26" cy="30" rx="2.5" ry="4" fill="#fff"/>
          <ellipse cx="26" cy="31" rx="1.2" ry="2" fill="#333"/>
          {/* Eye right */}
          <ellipse cx="38" cy="30" rx="2.5" ry="4" fill="#fff"/>
          <ellipse cx="38" cy="31" rx="1.2" ry="2" fill="#333"/>
          {/* Smile */}
          <path d="M28 38c2 2 6 2 8 0" stroke="#F5B041" strokeWidth="2" strokeLinecap="round"/>
          {/* Paw waving */}
          <ellipse className="origin-bottom-right" cx="52" cy="44" rx="4" ry="8" fill="#FDEBD0" stroke="#F5B041" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
}
// CSS: @keyframes wave { 0%,100%{transform:rotate(0deg);} 20%{transform:rotate(-10deg);} 40%{transform:rotate(12deg);} 60%{transform:rotate(-8deg);} 80%{transform:rotate(8deg);} } .animate-wave{animation:wave 1s linear infinite;} 