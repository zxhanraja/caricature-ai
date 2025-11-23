
import React from 'react';

const galleryItems = [
    {
        image: "https://images.unsplash.com/photo-1546422904-90eab23c337c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        name: "Chloe & Sam",
        quote: "Our astronaut caricature is out of this world! We love it."
    },
    {
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        name: "David & Emma",
        quote: "So much fun! We couldn't stop laughing at our pirate-themed picture."
    },
    {
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        name: "Leo & Olivia",
        quote: "The details are amazing. A perfect, quirky memory."
    },
     {
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        name: "Mia & Noah",
        quote: "10/10 would recommend for a unique gift idea!"
    }
];

const CommunityGallery: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1">From Our Community</h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto delay-2">Check out some of the amazing and hilarious creations our users have brought to life.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="text-center scroll-reveal" style={{transitionDelay: `${(index + 1) * 100}ms`}}>
                            <img src={item.image} alt={`Caricature by ${item.name}`} className="w-full h-auto object-cover mb-4 rounded-lg shadow-sm"/>
                            <p className="font-bold delay-1">{item.name}</p>
                            <p className="text-sm text-[var(--text-secondary)] italic delay-2">"{item.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityGallery;
