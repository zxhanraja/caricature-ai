
import React from 'react';

interface BackToHomeProps {
  onBack: () => void;
}

export const BackToHome: React.FC<BackToHomeProps> = ({ onBack }) => {
  return (
    <button
      onClick={onBack}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-[var(--border-color)] rounded-full shadow-lg hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] transition-all duration-300 group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      <span className="font-bold text-sm uppercase tracking-wider">Back to Home</span>
    </button>
  );
};

export default BackToHome;
