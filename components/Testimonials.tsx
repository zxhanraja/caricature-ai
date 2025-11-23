
import React from 'react';

const testimonials = [
    {
        quote: "I haven't laughed this hard in ages! We uploaded a goofy selfie and got back a masterpiece. It's now my phone wallpaper.",
        name: "Jessica & Tom",
        avatar: "https://i.pravatar.cc/100?u=jessica"
    },
    {
        quote: "The perfect anniversary gift! It was so easy to use, and the result was way more creative and fun than I ever expected. My husband loved it.",
        name: "Maria & Carlos",
        avatar: "https://i.pravatar.cc/100?u=maria"
    },
    {
        quote: "This is our new favorite thing. We've already made three different caricatures for our family. The AI is incredibly clever and the art style is just fantastic.",
        name: "Priya & Raj",
        avatar: "https://i.pravatar.cc/100?u=priya"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[var(--bg-secondary)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">Loved by Couples Everywhere</h2>
                    <p className="text-lg section-subheading max-w-2xl mx-auto delay-2">Don't just take our word for it. Here's what people are saying about their AI-generated memories.</p>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg scroll-reveal" style={{transitionDelay: `${(index + 1) * 100}ms`}}>
                            <p className="text-lg italic text-gray-600 mb-6 delay-1">"{testimonial.quote}"</p>
                            <div className="flex items-center delay-2">
                                 <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                                 <div>
                                    <p className="font-bold text-black">{testimonial.name}</p>
                                 </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
