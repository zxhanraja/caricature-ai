
import React from 'react';

export const AiBotIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.5 1.591L5.22 15.12h13.56l-4.03-4.711a2.25 2.25 0 01-.5-1.591V3.104M15.75 21v-5.659a2.25 2.25 0 00-.5-1.591l-4.03-4.712m-4.03 4.712L5.22 15.12m13.56 0h-3.84m-4.03-4.712v-5.714m0 0c0-1.657 1.343-3 3-3s3 1.343 3 3v5.714" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
);
