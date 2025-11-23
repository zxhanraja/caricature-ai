

import React from 'react';

const AiArtistProfile: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                <div className="scroll-reveal">
                    <h2 className="text-5xl font-black-condensed tracking-tighter leading-none mb-4 delay-1">Meet the Artist</h2>
                    <h3 className="text-2xl font-bold mb-4 delay-2">Arty, Your Personal AI Caricaturist</h3>
                    <p className="text-[var(--text-secondary)] delay-3">"Hello there! I'm Arty. I may be built from algorithms and data, but my passion is turning your photos into moments of pure joy. I've studied thousands of art styles and a million funny faces to develop my unique craft. My goal isn't just to draw, but to make you smile. Let's create something wonderfully weird together!"</p>
                </div>
            </div>
        </section>
    );
};

export default AiArtistProfile;