
import React from 'react';

const steps = [
    {
        number: "01",
        title: "Upload Your Photo",
        description: "Choose a clear, well-lit photo of the couple. Our AI works best with smiling faces looking towards the camera.",
    },
    {
        number: "02",
        title: "AI Works Its Magic",
        description: "Our powerful Gemini model analyzes the photo, understands its context, and reimagines it in our unique, humorous art style.",
    },
    {
        number: "03",
        title: "Download & Share",
        description: "Receive your high-quality caricature in seconds. Download it, share it on social media, or print it as a fun gift!",
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">Simple, Fun, Instant.</h2>
                    <p className="text-lg section-subheading delay-2">Creating your caricature is as easy as one, two, three. Here’s how you can bring your fun memories to life.</p>
                </div>

                <div className="scroll-reveal stagger-container mt-16 md:mt-24 grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const animationClass = index === 1 ? 'from-right' : 'from-left';
                        return (
                            <div 
                                key={index} 
                                className={`stagger-item ${animationClass} bg-white p-8 rounded-2xl shadow-lg`}
                            >
                                <div className="relative">
                                    <span className="absolute -left-4 -top-6 text-8xl font-black-condensed text-gray-300 select-none">
                                        {step.number}
                                    </span>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                                        <p className="mt-2 text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
