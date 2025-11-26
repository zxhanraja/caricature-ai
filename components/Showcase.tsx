
import React from 'react';

const showcaseImages = [
  "/images/caricature-1.png",
  "/images/caricature-2.png",
  "/images/caricature-3.png",
  "/images/caricature-4.png",
  "/images/caricature-5.png",
  "/images/caricature-6.png",
];

const Showcase: React.FC = () => {
  // Split images into two columns (Left & Right) for perfect masonry packing
  // This avoids the "vertical gap" issue caused by CSS Grid rows
  const leftColumn = showcaseImages.filter((_, i) => i % 2 === 0);
  const rightColumn = showcaseImages.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="scroll-reveal mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none delay-1 section-heading">A Gallery of Grins</h2>
          <p className="text-lg section-subheading max-w-2xl mx-auto mt-4 delay-2">See what our AI can create. Every image is a unique masterpiece, filled with personality and humor.</p>
        </div>

        {/* Split-Column Flex Layout (True Masonry) */}
        <div className="flex flex-row gap-3 md:gap-6 items-start">

          {/* Left Column */}
          <div className="flex flex-col gap-3 md:gap-6 w-1/2">
            {leftColumn.map((src, index) => (
              <div key={`left-${index}`} className="scroll-reveal">
                <img
                  src={src}
                  alt={`Showcase caricature left ${index}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 md:gap-6 w-1/2">
            {rightColumn.map((src, index) => (
              <div key={`right-${index}`} className="scroll-reveal">
                <img
                  src={src}
                  alt={`Showcase caricature right ${index}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;
