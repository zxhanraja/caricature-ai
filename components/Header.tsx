
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-8 transition-all duration-300 ${scrolled ? 'bg-[var(--bg-primary)] shadow-md' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-[var(--text-primary)]">
          <Logo className="h-10 w-auto" />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
