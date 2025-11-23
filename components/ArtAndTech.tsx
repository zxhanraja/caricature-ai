
import React from 'react';

const ArtAndTech: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[var(--bg-primary)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="scroll-reveal">
                        <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">Behind the Art & Tech</h2>
                        <p className="text-lg text-[var(--text-secondary)] max-w-xl delay-2">We didn't just build a tool; we crafted an artist. Discover the unique blend of technology and creativity that makes every caricature special.</p>
                    </div>
                    <div className="space-y-10">
                        <div className="scroll-reveal">
                            <h3 className="text-2xl font-bold delay-1 section-heading">The Artistic Soul</h3>
                            <p className="mt-2 text-[var(--text-secondary)] delay-2">Our AI is trained to replicate the beloved style of live event caricaturists. It prioritizes "cute" over "grotesque," using soft rosy cheeks, noodle-like arms, and warm colors to create a heartwarming memento rather than a harsh satire.</p>
                        </div>
                         <div className="scroll-reveal">
                            <h3 className="text-2xl font-bold delay-1 section-heading">The Technological Brain</h3>
                            <p className="mt-2 text-[var(--text-secondary)] delay-2">Powered by Google's Gemini, one of the most advanced AI models in the world, our generator analyzes facial features, age, and expressions to ensure the likeness is preserved even within the exaggerated "Chibi" art style.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArtAndTech;
