
import React from 'react';

const StyleDeepDive: React.FC = () => {
    return (
        <section className="py-20 md:py-32 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">A Closer Look at the Artistry</h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto delay-2">Every caricature is a blend of your photo and our unique, AI-driven art style. Here’s what makes our creations stand out.</p>
                </div>
                <div className="mt-20 grid lg:grid-cols-2 gap-8 items-center">
                    <div className="scroll-reveal">
                         <img src="https://ik.imagekit.io/ioktbcewp/caricature%20(12).png" alt="Caricature Example" className="w-full h-auto object-cover rounded-lg shadow-xl"/>
                    </div>
                    <div className="space-y-8">
                        <div className="scroll-reveal">
                            <h3 className="text-xl font-bold delay-1 section-heading">Unique, Funny Scenarios</h3>
                            <p className="mt-1 text-[var(--text-secondary)] delay-2">We don't just draw you standing there. Our AI analyzes your photo to create a hilarious scenario—from tiny pocket-sized husbands to flying magic carpets!</p>
                        </div>
                        <div className="scroll-reveal">
                            <h3 className="text-xl font-bold delay-1 section-heading">Huge Heads, Tiny Bodies</h3>
                            <p className="mt-1 text-[var(--text-secondary)] delay-2">Inspired by traditional Indian wedding artists, we use large, expressive heads (40-50% of height) paired with cute, tiny bodies to maximize personality.</p>
                        </div>
                        <div className="scroll-reveal">
                            <h3 className="text-xl font-bold delay-1 section-heading">Hand-Drawn Aesthetic</h3>
                            <p className="mt-1 text-[var(--text-secondary)] delay-2">The AI mimics the natural wobble of ink on paper and the soft, bleeding edges of watercolor markers, all set against a clean, pure white background.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StyleDeepDive;
