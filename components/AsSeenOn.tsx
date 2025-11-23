

import React from 'react';

const outlets = ["TechCrunch", "VOGUE", "WIRED", "The Verge", "Brides"];

const AsSeenOn: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal">
                    <h2 className="text-center text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest delay-1">
                        As Featured In
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
                        {outlets.map((outlet, index) => (
                            <div key={index} className="text-xl font-bold text-[var(--text-secondary)]" style={{transitionDelay: `${(index + 2) * 100}ms`}}>
                                {outlet}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AsSeenOn;