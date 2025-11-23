import React from 'react';

const WorldMap: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">Creations Across the Globe</h2>
                    <p className="text-lg section-subheading max-w-2xl mx-auto delay-2">People from all over the world are turning their photos into fun memories. Join the global creative community!</p>
                </div>
                <div className="mt-16 relative scroll-reveal flex justify-center items-center h-64 md:h-80" aria-hidden="true">
                    <div className="absolute bottom-0 w-[450px] h-[225px] md:w-[600px] md:h-[300px]">
                        <svg width="100%" height="100%" viewBox="0 0 450 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <ellipse cx="150" cy="210" rx="180" ry="160" transform="rotate(-10 150 210)" fill="#3f3f46" />
                                <ellipse cx="300" cy="210" rx="180" ry="160" transform="rotate(10 300 210)" fill="#3f3f46" />
                            </g>

                            {/* Stars */}
                            <circle cx="225" cy="80" r="2" fill="white" className="twinkle" style={{ animationDelay: '0s' }} />
                            <circle cx="150" cy="110" r="1.5" fill="white" className="twinkle" style={{ animationDelay: '1.2s' }} />
                            <circle cx="300" cy="120" r="1.5" fill="white" className="twinkle" style={{ animationDelay: '0.5s' }} />
                            <circle cx="190" cy="140" r="1" fill="white" className="twinkle" style={{ animationDelay: '2.5s' }} />
                            <circle cx="260" cy="150" r="1" fill="white" className="twinkle" style={{ animationDelay: '1.8s' }} />
                            <circle cx="340" cy="90" r="2" fill="white" className="twinkle" style={{ animationDelay: '3s' }} />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldMap;