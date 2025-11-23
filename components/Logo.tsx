
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 230 44"
    className={className}
    fill="none"
    aria-label="Caricature AI Logo"
  >
    {/* Icon Container - Rounded Square */}
    <rect x="0" y="2" width="40" height="40" rx="10" fill="currentColor" />
    
    {/* Pen/Quill Icon - Uses the background color to appear 'cut out' */}
    <path
      d="M26.5 12.5C25.7 11.7 24.3 11.7 23.5 12.5L13.5 22.5C13.3 22.7 13.2 22.9 13.1 23.2L12 28L16.8 26.9C17.1 26.8 17.3 26.7 17.5 26.5L27.5 16.5C28.3 15.7 28.3 14.3 27.5 13.5L26.5 12.5Z"
      fill="var(--bg-primary)"
    />
    <path
      d="M13.5 22.5L17.5 26.5"
      stroke="var(--bg-primary)"
      strokeWidth="1.5"
    />

    {/* Text */}
    <text
      x="52"
      y="32"
      fill="currentColor"
      fontFamily="'Inter', sans-serif"
      fontWeight="900"
      fontSize="26"
      letterSpacing="-0.06em"
    >
      Caricature AI
    </text>
  </svg>
);

export default Logo;
