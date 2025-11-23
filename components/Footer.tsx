
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';

interface FooterProps {
    onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="dark-section py-16 px-6 md:px-8 mt-20 md:mt-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="col-span-2 lg:col-span-2">
                <h3 className="text-2xl font-black-condensed tracking-tighter text-[var(--text-primary)]">Caricature AI</h3>
                <p className="mt-4 text-sm text-[var(--text-secondary)] max-w-xs">
                    Reimagine your moments with a touch of humor. AI-powered caricatures, instant and unforgettable.
                </p>
            </div>

            <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-4">Explore</h4>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                    <li><button onClick={() => onNavigate('how-it-works')} className="hover:underline text-left">How It Works</button></li>
                    <li><button onClick={() => onNavigate('gallery')} className="hover:underline text-left">Gallery</button></li>
                    <li><button onClick={() => onNavigate('features')} className="hover:underline text-left">Features</button></li>
                    <li><button onClick={() => onNavigate('create')} className="hover:underline text-left">Create Now</button></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-4">Legal</h4>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                    <li><button onClick={() => onNavigate('privacy')} className="hover:underline text-left">Privacy Policy</button></li>
                    <li><button onClick={() => onNavigate('terms')} className="hover:underline text-left">Terms of Service</button></li>
                    <li><button onClick={() => onNavigate('faq')} className="hover:underline text-left">FAQ</button></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-4">Connect</h4>
                <div className="flex space-x-4">
                    <a href="#" aria-label="Instagram" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                    <a href="#" aria-label="Twitter" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                    <a href="#" aria-label="Facebook" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                </div>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center text-xs font-medium text-[var(--text-secondary)]">
          <p className="order-2 md:order-1 mt-4 md:mt-0">&copy; {new Date().getFullYear()} CARICATURE AI. ALL RIGHTS RESERVED.</p>
          <div className="order-1 md:order-2 flex items-center space-x-4">
             <span>KOLKATA</span>
             <span className="hidden md:inline">|</span>
             <span>POWERED BY GEMINI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
