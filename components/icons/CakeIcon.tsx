
import React from 'react';

export const CakeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.828a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.828V8.25A2.25 2.25 0 015.25 6H12v2.25a2.25 2.25 0 004.5 0V6h2.25A2.25 2.25 0 0121 8.25v7.578z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V5.25A2.25 2.25 0 0114.25 3h.01M12 6V5.25A2.25 2.25 0 009.75 3h-.01M12 6v2.25a2.25 2.25 0 004.5 0V6M12 6v2.25a2.25 2.25 0 01-4.5 0V6" />
    </svg>
);
