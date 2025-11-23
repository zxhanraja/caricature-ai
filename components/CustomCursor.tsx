import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const [onDark, setOnDark] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const handleMouseEnter = () => {
            setIsVisible(true);
        };
        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        // Logic for color inversion
        const darkSections = document.querySelectorAll('.dark-section');
        const handleEnterDark = () => setOnDark(true);
        const handleLeaveDark = () => setOnDark(false);

        darkSections.forEach(section => {
            section.addEventListener('mouseenter', handleEnterDark);
            section.addEventListener('mouseleave', handleLeaveDark);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            darkSections.forEach(section => {
                section.removeEventListener('mouseenter', handleEnterDark);
                section.removeEventListener('mouseleave', handleLeaveDark);
            });
        };
    }, []);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <div
            className={`custom-cursor ${onDark ? 'on-dark' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                opacity: isVisible ? 1 : 0,
            }}
        />
    );
};

export default CustomCursor;