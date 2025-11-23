
import React, { useEffect } from 'react';
import BackToHome from './BackToHome';
import HowItWorks from './HowItWorks';

interface HowItWorksPageProps {
    onBack: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <BackToHome onBack={onBack} />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-8">
                    <h1 className="text-6xl font-black-condensed tracking-tighter section-heading">How It Works</h1>
                    <p className="text-xl text-[var(--text-secondary)] mt-4">The process is simple, but the results are magical.</p>
                </div>
                <HowItWorks />
            </div>
        </div>
    );
};

export default HowItWorksPage;
