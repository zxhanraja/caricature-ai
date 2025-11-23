import React from 'react';
import { DotGridIcon } from './icons/DotGridIcon';

const features = [
    {
        tag: "Custom",
        title: "Customizable product",
        description: "Advanced customization tools that deliver top model performance at a competitive inference cost.",
        highlights: [0, 4, 8]
    },
    {
        tag: "Flex",
        title: "Flexibility and Diversity",
        description: "The greatest variety and diversity of data to help deliver the greatest value to your product performance.",
        highlights: [2, 4, 6]
    },
    {
        tag: "Performance",
        title: "Scalability",
        description: "Packaged with inference engines that deliver better runtime performance at a lower cost. Scale up, or down, as needed.",
        highlights: [1, 4, 7]
    }
];

const Features: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                 <div className="scroll-reveal text-center max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">The Magic Behind the Smile</h2>
                    <p className="text-lg section-subheading delay-2">We've combined cutting-edge technology with a touch of artistic flair to bring you an experience that's both powerful and incredibly fun.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 md:mt-24 grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className="slide-in-left scroll-reveal bg-white p-8 rounded-2xl shadow-lg"
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <DotGridIcon className="w-12 h-12 mb-6" highlights={feature.highlights} />
                        <h3 className="text-2xl font-bold section-heading">{feature.title}</h3>
                        <p className="mt-2 section-subheading">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;