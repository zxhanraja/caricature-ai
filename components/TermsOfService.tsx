
import React, { useEffect } from 'react';
import BackToHome from './BackToHome';

interface TermsOfServiceProps {
    onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-24 pb-20 px-6 transition-colors duration-300">
            <BackToHome onBack={onBack} />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black-condensed tracking-tighter mb-8 section-heading">Terms of Service</h1>
                <p className="text-[var(--text-secondary)] mb-8">Effective Date: October 26, 2023</p>

                <div className="space-y-8 text-lg">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p className="text-[var(--text-secondary)]">
                            By accessing and using Caricature AI, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                        <p className="text-[var(--text-secondary)]">
                            Caricature AI provides users with an AI-powered tool to generate caricature images from uploaded photos. You understand and agree that the Service is provided "AS-IS" and that Caricature AI assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. User Conduct</h2>
                        <p className="text-[var(--text-secondary)]">
                            You agree to not use the service to:
                        </p>
                        <ul className="list-disc ml-6 mt-4 text-[var(--text-secondary)] space-y-2">
                            <li>Upload any content that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.</li>
                            <li>Harm minors in any way.</li>
                            <li>Impersonate any person or entity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                        <p className="text-[var(--text-secondary)]">
                            You retain all rights to the original photos you upload. By using the service, you grant Caricature AI a temporary license to process the image solely for the purpose of generating the caricature. The generated caricature is yours to use for personal, non-commercial purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
                        <p className="text-[var(--text-secondary)]">
                            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
