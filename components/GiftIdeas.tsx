

import React from 'react';

const ideas = [
    {
        title: "Anniversary Gifts",
        description: "Celebrate your special day with a piece of art that's as unique as your relationship."
    },
    {
        title: "Wedding Invitations",
        description: "Add a touch of fun and personality to your wedding invites that your guests will never forget."
    },
    {
        title: "Profile Pictures",
        description: "Stand out on social media with a fun, hand-drawn version of you and your partner."
    },
    {
        title: "Printed Wall Art",
        description: "Download the high-resolution file and print it on a canvas to create a truly one-of-a-kind decoration."
    }
];

const GiftIdeas: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1">Endless Possibilities</h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto delay-2">A caricature is more than just a funny picture. It's a unique way to capture a memory, celebrate a milestone, or simply share a smile.</p>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {ideas.map((idea, index) => (
                         <div key={index} className="scroll-reveal" style={{transitionDelay: `${(index + 1) * 100}ms`}}>
                            <h3 className="text-xl font-bold mb-2 delay-2">{idea.title}</h3>
                            <p className="text-[var(--text-secondary)] delay-3">{idea.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GiftIdeas;