
import React from 'react';

const articles = [
    {
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "GIFT IDEAS",
        title: "Why Caricatures Are the Most Personal Anniversary Gift",
        excerpt: "Move over, flowers and chocolates. Discover why a custom piece of art that captures your unique bond is the gift they'll talk about for years."
    },
    {
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "ART & TECH",
        title: "The Funny Thing About AI: How We Teach an Algorithm to Have a Sense of Humor",
        excerpt: "A behind-the-scenes look at the creative prompts and artistic direction that transform a simple photo into a hilarious masterpiece."
    },
    {
        image: "https://images.unsplash.com/photo-1513279922550-250c2129b7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "INSPIRATION",
        title: "5 Creative Ways to Use Your Couple Caricature (Besides a Profile Pic!)",
        excerpt: "From custom wedding invitations to one-of-a-kind wall art, here are some fun and unexpected ways to showcase your unique portrait."
    }
];

const BlogSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1">From Our Studio</h2>
                     <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto delay-2">A few thoughts on art, technology, and the joy of a good laugh.</p>
                </div>
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white overflow-hidden scroll-reveal border border-[var(--border-color)]" style={{transitionDelay: `${(index + 1) * 100}ms`}}>
                             <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                             <div className="p-6">
                                <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider delay-1">{article.category}</p>
                                <h3 className="text-xl font-bold mt-2 mb-3 delay-2">{article.title}</h3>
                                <p className="text-[var(--text-secondary)] text-sm delay-3">{article.excerpt}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
