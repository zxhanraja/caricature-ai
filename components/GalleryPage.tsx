
import React, { useEffect } from 'react';
import BackToHome from './BackToHome';
import Showcase from './Showcase';

interface GalleryPageProps {
    onBack: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            <BackToHome onBack={onBack} />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
                    <h1 className="text-6xl font-black-condensed tracking-tighter section-heading">Art Gallery</h1>
                    <p className="text-xl text-[var(--text-secondary)] mt-4">A collection of our finest AI-generated masterpieces.</p>
                </div>
                <Showcase />
            </div>
        </div>
    );
};

export default GalleryPage;
