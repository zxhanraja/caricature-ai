
import React, { useEffect } from 'react';
import BackToHome from './BackToHome';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-24 pb-20 px-6 transition-colors duration-300">
            <BackToHome onBack={onBack} />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black-condensed tracking-tighter mb-8 section-heading">Privacy Policy</h1>
                <p className="text-[var(--text-secondary)] mb-8">Last Updated: October 26, 2023</p>

                <div className="space-y-8 text-lg">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p className="text-[var(--text-secondary)]">
                            Welcome to Caricature AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
                        <p className="text-[var(--text-secondary)]">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc ml-6 mt-4 text-[var(--text-secondary)] space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address.</li>
                            <li><strong>Image Data:</strong> includes photos you upload for caricature generation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                        <p className="text-[var(--text-secondary)]">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc ml-6 mt-4 text-[var(--text-secondary)] space-y-2">
                            <li>To provide the AI caricature generation service.</li>
                            <li>To improve our website and services.</li>
                            <li>To manage our relationship with you.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
                        <p className="text-[var(--text-secondary)]">
                            <strong>Crucially:</strong> Images uploaded for generation are processed in real-time and are NOT stored on our servers permanently. They are deleted immediately after the generation session is complete or within 24 hours.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                        <p className="text-[var(--text-secondary)]">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: support@caricatureai.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
