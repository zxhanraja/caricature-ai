
import React, { useEffect } from 'react';
import BackToHome from './BackToHome';
import Features from './Features';

interface FeaturesPageProps {
    onBack: () => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            <BackToHome onBack={onBack} />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
                    <h1 className="text-6xl font-black-condensed tracking-tighter section-heading">Features</h1>
                    <p className="text-xl text-[var(--text-secondary)] mt-4">Explore the technology and tools that make our caricatures special.</p>
                </div>
                <Features />
            </div>
        </div>
    );
};

export default FeaturesPage;
