
import React from 'react';

const NewsletterSignup: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for subscribing!");
    };

    return (
        <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                <div className="scroll-reveal">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1 section-heading">Stay in the Loop</h2>
                    <p className="text-lg section-subheading max-w-2xl mx-auto mb-10 delay-2">Subscribe to our newsletter for the latest updates, new feature announcements, and exclusive creative tips from Arty the AI artist.</p>
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 delay-3">
                        <input 
                            type="email" 
                            placeholder="your.email@example.com"
                            required
                            className="w-full h-14 px-4 border border-[var(--border-color)] rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200 flex-grow"
                        />
                        <button 
                            type="submit"
                            className="btn btn-primary text-base flex-shrink-0 h-14"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;