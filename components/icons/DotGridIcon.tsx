import React from 'react';

interface DotGridIconProps {
  className?: string;
  highlights?: number[];
}

export const DotGridIcon: React.FC<DotGridIconProps> = ({ className, highlights = [] }) => {
  const dots = Array.from({ length: 9 }, (_, i) => i);

  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map(i => {
        const isHighlighted = highlights.includes(i);
        const color = isHighlighted ? 'var(--accent-primary)' : '#D1D5DB'; 
        return (
          <circle
            key={i}
            cx={4 + (i % 3) * 12}
            cy={4 + Math.floor(i / 3) * 12}
            r={3}
            fill={color}
            className="transition-colors duration-500"
          />
        );
      })}
    </svg>
  );
};