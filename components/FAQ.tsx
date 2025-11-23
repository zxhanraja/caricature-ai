
import React, { useState } from 'react';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';

const faqs = [
    {
        question: "What kind of photos work best?",
        answer: "For the best results, use a clear, front-facing photo of the couple where both faces are well-lit. High-resolution images work better than blurry ones. And don't forget to smile!"
    },
    {
        question: "Is it really free to use?",
        answer: "Yes, this tool is completely free for personal use. You can generate and download as many caricatures as you like. We believe in spreading joy and laughter!"
    },
    {
        question: "How long does the generation process take?",
        answer: "Thanks to the power of Google's Gemini model, the process is incredibly fast. Most caricatures are generated in under 30 seconds, though it can vary slightly based on server load."
    },
    {
        question: "Can I use the generated images commercially?",
        answer: "The images generated are intended for personal use, such as sharing on social media or printing for a gift. For commercial licensing inquiries, please contact our support team."
    },
    {
        question: "What happens to my uploaded photos?",
        answer: "We respect your privacy. Your uploaded photos are only used for the generation process and are not stored on our servers or used for any other purpose. They are deleted immediately after the caricature is created."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-32 bg-[var(--bg-primary)] transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">Got Questions? We've Got Answers.</h2>
                    <p className="text-lg section-subheading max-w-2xl mx-auto delay-2">Here are some of the most common questions we get about our AI Caricature Generator.</p>
                </div>
                <div className="mt-16 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-[var(--border-color)] scroll-reveal" style={{transitionDelay: `${(index + 1) * 100}ms`}}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left py-6"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-xl font-bold section-heading">{faq.question}</span>
                                <span className="text-[var(--accent-primary)]">
                                    {openIndex === index ? <MinusIcon className="w-6 h-6"/> : <PlusIcon className="w-6 h-6"/>}
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <p className="pb-6 section-subheading">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
