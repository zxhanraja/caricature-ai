
import React from 'react';

interface FinalCTAProps {
    onScrollToGenerator: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToGenerator }) => {
    return (
        <section className="py-20 md:py-32 bg-[var(--bg-primary)] transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                <div className="scroll-reveal">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-6 delay-1 section-heading">Ready to Create Your Own?</h2>
                    <p className="text-lg section-subheading max-w-2xl mx-auto mb-10 delay-2">Your unique piece of art is just a photo away. Turn your favorite moment into a funny, unforgettable masterpiece now.</p>
                    <button 
                        onClick={onScrollToGenerator}
                        className="btn btn-primary text-xl delay-3"
                    >
                        GET STARTED NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
