
import React, { useEffect } from 'react';
import BackToHome from './BackToHome';
import FAQ from './FAQ';

interface FAQPageProps {
    onBack: () => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <BackToHome onBack={onBack} />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-8">
                    <h1 className="text-6xl font-black-condensed tracking-tighter section-heading">Frequently Asked Questions</h1>
                    <p className="text-xl text-[var(--text-secondary)] mt-4">Everything you need to know.</p>
                </div>
                <FAQ />
            </div>
        </div>
    );
};

export default FAQPage;
