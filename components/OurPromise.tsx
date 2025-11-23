

import React from 'react';

const OurPromise: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                <div className="scroll-reveal">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">Our Promise to You</h2>
                    <p className="text-lg section-subheading max-w-2xl mx-auto delay-2">Your trust, privacy, and creative joy are at the heart of everything we do.</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-12">
                    <div className="scroll-reveal" style={{transitionDelay: '100ms'}}>
                        <h3 className="text-2xl font-bold delay-1 section-heading">Privacy First</h3>
                        <p className="mt-2 section-subheading delay-2">Your photos are yours. We process them to create your art and then delete them immediately. No storage, no sharing, no exceptions.</p>
                    </div>
                    <div className="scroll-reveal" style={{transitionDelay: '200ms'}}>
                        <h3 className="text-2xl font-bold delay-1 section-heading">Unleashed Creativity</h3>
                        <p className="mt-2 section-subheading delay-2">We are constantly refining our prompts and adding new scenarios to ensure every creation is a unique surprise, not a cookie-cutter copy.</p>
                    </div>
                    <div className="scroll-reveal" style={{transitionDelay: '300ms'}}>
                        <h3 className="text-2xl font-bold delay-1 section-heading">Quality & Fun</h3>
                        <p className="mt-2 section-subheading delay-2">We're committed to delivering high-quality, high-resolution art that's as fun to create as it is to share. Your smile is our success.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPromise;