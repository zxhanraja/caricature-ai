
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ImageUploader from './components/ImageUploader';
import CaricatureDisplay from './components/CaricatureDisplay';
import HowItWorks from './components/HowItWorks';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import { fileToBase64 } from './utils/fileUtils';
import { generateCaricature } from './services/geminiService';
import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';
import RippleEffect from './components/RippleEffect';
import ArtAndTech from './components/ArtAndTech';
import StyleDeepDive from './components/StyleDeepDive';

// Legal Pages
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';


// List of heavy assets to preload so the site is instant after loader
const ASSETS_TO_PRELOAD = [
  // Showcase - User's Custom Images
  "https://ik.imagekit.io/ioktbcewp/caricature%20(8).png",
  "https://ik.imagekit.io/ioktbcewp/caricature%20(5).png",
  "https://ik.imagekit.io/ioktbcewp/caricature%20(7).png",
  "https://ik.imagekit.io/ioktbcewp/caricature%20(4).png",
  "https://ik.imagekit.io/ioktbcewp/caricature%20(3).png",
  "https://ik.imagekit.io/ioktbcewp/caricature%20(1).png",
  // Style Deep Dive (New Image)
  "https://ik.imagekit.io/ioktbcewp/caricature%20(12).png",
  // Avatars
  "https://i.pravatar.cc/100?u=jessica",
  "https://i.pravatar.cc/100?u=maria",
  "https://i.pravatar.cc/100?u=priya"
];

const App: React.FC = () => {
  const [appReady, setAppReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);

  // Refs for smooth scrolling
  const generatorRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // 1. Asset Preloader Logic
    let loadedCount = 0;
    const totalAssets = ASSETS_TO_PRELOAD.length;

    const updateProgress = () => {
      loadedCount++;
      const percent = Math.min(100, Math.round((loadedCount / totalAssets) * 100));
      setLoadingProgress(percent);
    };

    // If no assets, just set 100 immediately
    if (totalAssets === 0) {
      setLoadingProgress(100);
    } else {
      ASSETS_TO_PRELOAD.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = updateProgress;
        img.onerror = updateProgress; // Count errors as loaded so app doesn't hang
      });
    }

    // 2. Scroll Observer Logic
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        { threshold: 0.2 }
    );

    // Wait for DOM updates
    setTimeout(() => {
        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
        observer.disconnect();
    };
  }, [currentPage]); // Re-run observer when page changes

  // Handle scrolling when returning to home or clicking navigation links
  useEffect(() => {
    if (currentPage === 'home' && scrollToSection) {
        // Small timeout to ensure the home page has rendered if coming from a different page
        setTimeout(() => {
            let targetRef = null;
            switch (scrollToSection) {
                case 'create':
                    targetRef = generatorRef;
                    break;
                case 'how-it-works':
                    targetRef = howItWorksRef;
                    break;
                case 'gallery':
                    targetRef = galleryRef;
                    break;
                case 'features':
                    targetRef = featuresRef;
                    break;
                case 'faq':
                    targetRef = faqRef;
                    break;
                case 'top':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                default:
                    break;
            }

            if (targetRef && targetRef.current) {
                targetRef.current.scrollIntoView({ behavior: 'smooth' });
            }
            setScrollToSection(null); // Reset after scroll
        }, 100);
    }
  }, [currentPage, scrollToSection]);

  const handleImageReady = (file: File) => {
    setImageFile(file);
    setResult(null);
    setError(null);
  };

  const handleGenerate = async () => {
    if (!imageFile) return;
    setLoading(true);
    setError(null);
    try {
        const base64Image = await fileToBase64(imageFile);
        const generatedImage = await generateCaricature(base64Image, imageFile.type);
        setResult(generatedImage);
    } catch (err: any) {
        setError(err.message || "Something went wrong.");
    } finally {
        setLoading(false);
    }
  };

  const handleReset = () => {
    setImageFile(null);
    setResult(null);
    setError(null);
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (destination: string) => {
      if (['privacy', 'terms'].includes(destination)) {
          setCurrentPage(destination);
          window.scrollTo(0, 0);
      } else {
          // If navigating to a section on the home page
          setCurrentPage('home');
          setScrollToSection(destination === 'home' ? 'top' : destination);
      }
  };

  // Render Content Based on Page State
  const renderPage = () => {
      switch (currentPage) {
          case 'privacy':
              return <PrivacyPolicy onBack={() => handleNavigate('home')} />;
          case 'terms':
              return <TermsOfService onBack={() => handleNavigate('home')} />;
          default:
              return (
                  <>
                    <div className="relative z-10">
                        <Header />
                        <main>
                           <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                              <div className="max-w-4xl">
                                {/* Updated Font Sizes: Reduced for mobile (text-5xl) to prevent overflow */}
                                <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black-condensed tracking-tighter leading-none section-heading">
                                  Your Photos, Reimagined.
                                </h1>
                                 <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4 section-subheading">Turn your favorite couple photos into hilarious, one-of-a-kind caricatures with the power of AI.</p>
                                <button onClick={handleScrollToGenerator} className="btn btn-primary mt-8 text-lg">
                                  Create Your Caricature
                                </button>
                              </div>
                            </section>
                            
                            <div ref={howItWorksRef} className="dark-section">
                              <HowItWorks />
                            </div>
            
                            <div ref={galleryRef}>
                                <Showcase />
                            </div>
          
                            <div className="dark-section">
                              <StyleDeepDive />
                            </div>
            
                            <div className="dark-section">
                              <Testimonials />
                            </div>
                            
                            <div ref={featuresRef}>
                                <ArtAndTech />
                            </div>
            
                            <section ref={generatorRef} className="py-20 md:py-32 min-h-screen flex items-center justify-center scroll-reveal dark-section">
                                <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
                                   <div className="text-center mb-16">
                                       {/* Updated Font Sizes: Reduced for mobile (text-4xl) */}
                                       <h2 className="text-4xl md:text-7xl font-black-condensed tracking-tighter leading-none delay-1 section-heading">Create Your Own</h2>
                                       <p className="text-lg section-subheading max-w-2xl mx-auto mt-4 delay-2">Upload a photo and let our AI turn it into a unique, funny caricature in seconds.</p>
                                   </div>
                                    {loading ? (
                                         <div className="text-center flex flex-col items-center">
                                            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[var(--accent-primary)] mb-6"></div>
                                            <p className="text-2xl font-medium section-heading">Generating your masterpiece...</p>
                                            <p className="section-subheading mt-2">The AI is working its magic. This might take a moment.</p>
                                         </div>
                                    ) : result ? (
                                        <CaricatureDisplay imageData={result} onRetry={handleReset} onGenerateAgain={handleGenerate} />
                                    ) : imageFile ? (
                                        <div className="text-center">
                                            <img src={URL.createObjectURL(imageFile)} alt="Preview" className="max-w-sm w-full mx-auto mb-8 shadow-lg rounded-lg"/>
                                            <button 
                                                onClick={handleGenerate}
                                                className="btn btn-primary text-xl mt-8"
                                            >
                                                GENERATE CARICATURE
                                            </button>
                                            <button onClick={() => setImageFile(null)} className="mt-4 block mx-auto text-sm text-[var(--text-primary)] underline hover:text-[var(--accent-primary)] transition-colors">
                                                Choose a different photo
                                            </button>
                                        </div>
                                    ) : (
                                        <ImageUploader onImageReady={handleImageReady} />
                                    )}
            
                                    {error && <p className="error-box">{error}</p>}
                                </div>
                            </section>

                            <div ref={faqRef}>
                                <FAQ />
                            </div>
                            
                            <FinalCTA onScrollToGenerator={handleScrollToGenerator} />
                        </main>
                        <Footer onNavigate={handleNavigate} />
                    </div>
                  </>
              );
      }
  };
  
  return (
    <ErrorBoundary>
      <>
        <CustomCursor />
        <RippleEffect />
        {!appReady && (
          <Loader 
            progress={loadingProgress} 
            onLoaded={() => setAppReady(true)} 
          />
        )}
        <div className={`transition-opacity duration-500 ${!appReady ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* Fixed Sidebars - Only show on Home */}
          {currentPage === 'home' && (
              <>
                <div className="hidden md:block fixed top-0 left-8 z-40 h-screen pointer-events-none">
                    <div className="flex h-full items-center">
                        <p className="vertical-text text-xs font-medium text-[var(--text-secondary)]">
                            AI-POWERED CARICATURES
                        </p>
                    </div>
                </div>
                 <div className="hidden md:block fixed top-0 right-8 z-40 h-screen pointer-events-none">
                    <div className="flex h-full items-center">
                        <p className="vertical-text text-xs font-medium text-[var(--text-secondary)]">
                            28.6139° N, 77.2090° E
                        </p>
                    </div>
                </div>
              </>
          )}
          
          {renderPage()}

        </div>
      </>
    </ErrorBoundary>
  );
};

export default App;
