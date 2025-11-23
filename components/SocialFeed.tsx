
import React from 'react';

const posts = [
    {
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        username: "space_explorers_92",
        caption: "To the moon and back! Thanks for this hilarious keepsake. 🚀",
        likes: "1,204"
    },
    {
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        username: "jess_and_dave",
        caption: "Our pirate adventure has officially been immortalized. Arrr-mazing!",
        likes: "873"
    },
    {
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        username: "the_roaming_foodies",
        caption: "This is exactly how chaotic our kitchen is. 🤣 Perfect!",
        likes: "2,531"
    }
];

const SocialFeed: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="scroll-reveal text-center">
                    <h2 className="text-5xl md:text-7xl font-black-condensed tracking-tighter leading-none mb-4 delay-1">#AICaricature</h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto delay-2">Join the fun! Share your creation on social media and see what others are making.</p>
                </div>
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="border border-[var(--border-color)] scroll-reveal" style={{transitionDelay: `${(index + 1) * 100}ms`}}>
                             <img src={post.image} alt={`Social post by ${post.username}`} className="w-full h-80 object-cover" />
                             <div className="p-5">
                                <p className="font-bold text-sm delay-1">@{post.username}</p>
                                <p className="text-sm mt-2 delay-2">{post.caption}</p>
                                <div className="text-sm mt-4 text-[var(--text-secondary)] delay-3">
                                    <span>{post.likes} likes</span>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
