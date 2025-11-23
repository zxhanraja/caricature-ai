
import React, { useState, useEffect, useCallback } from 'react';

interface Ripple {
    id: number;
    x: number;
    y: number;
}

const RippleEffect: React.FC = () => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleAnimationEnd = useCallback((id: number) => {
        setRipples(prevRipples => prevRipples.filter(ripple => ripple.id !== id));
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // Ignore clicks on buttons and links for a cleaner effect
            const target = e.target as HTMLElement;
            if (target.closest('button') || target.closest('a')) {
                return;
            }

            const newRipple: Ripple = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setRipples(prevRipples => [...prevRipples, newRipple]);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    
    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }


    return (
        <>
            {ripples.map(ripple => (
                <div
                    key={ripple.id}
                    className="ripple"
                    style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
                    onAnimationEnd={() => handleAnimationEnd(ripple.id)}
                />
            ))}
        </>
    );
};

export default RippleEffect;