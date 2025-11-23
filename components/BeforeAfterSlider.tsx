
import React, { useState } from 'react';

const BeforeAfterSlider: React.FC = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <section className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">See the Transformation</h2>
                    <p className="text-lg section-subheading max-w-2xl mx-auto delay-2">Drag the slider to see how our AI reimagines a simple photo into a work of art full of personality and fun.</p>
                </div>
                <div className="mt-16 scroll-reveal">
                    <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden rounded-lg shadow-xl">
                        <img 
                            src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e194?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Before" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1569026569665-6f4817c47542?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="After" 
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                        />
                        <div 
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                            style={{ left: `calc(${sliderValue}% - 1px)` }}
                        >
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-2 border-[var(--accent-primary)] flex items-center justify-center shadow-2xl text-[var(--accent-primary)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                            aria-label="Before and after slider"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSlider;
