
import React from 'react';

const showcaseImages = [
    "https://ik.imagekit.io/ioktbcewp/caricature%20(8).png",
    "https://ik.imagekit.io/ioktbcewp/caricature%20(7).png",
    "https://ik.imagekit.io/ioktbcewp/caricature%20(5).png",
    "https://ik.imagekit.io/ioktbcewp/caricature%20(4).png",
    "https://ik.imagekit.io/ioktbcewp/caricature%20(3).png",
    "https://ik.imagekit.io/ioktbcewp/caricature%20(1).png",
];

const Showcase: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="scroll-reveal mb-12 text-center">
            <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none delay-1 section-heading">A Gallery of Grins</h2>
            <p className="text-lg section-subheading max-w-2xl mx-auto mt-4 delay-2">See what our AI can create. Every image is a unique masterpiece, filled with personality and humor.</p>
        </div>
        <div className="columns-2 md:columns-3 gap-4">
            {showcaseImages.map((src, index) => (
                <div key={index} className="mb-4 break-inside-avoid scroll-reveal">
                    <img 
                        src={src} 
                        alt={`Showcase caricature ${index + 1}`} 
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                        style={{transitionDelay: `${(index % 3) * 100 + 200}ms`}}
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
