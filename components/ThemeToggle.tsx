
import React, { useEffect, useState } from 'react';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

// Define interface for View Transition API
interface ViewTransition {
  ready: Promise<void>;
}

interface DocumentWithViewTransition extends Document {
  startViewTransition(callback: () => void): ViewTransition;
}

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Cast document to include startViewTransition
    const doc = document as unknown as DocumentWithViewTransition;

    // Fallback for browsers that don't support View Transitions
    if (!doc.startViewTransition) {
      updateThemeState();
      return;
    }

    // Get the button position for the animation origin
    const x = event.clientX;
    const y = event.clientY;

    // Calculate distance to the furthest corner of the screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Start the View Transition
    const transition = doc.startViewTransition(() => {
      updateThemeState();
    });

    // Wait for the pseudo-elements to be created, then animate the clip-path
    await transition.ready;

    // Animate the "new" view (the paint drop) expanding from the click
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in',
        // Target the ::view-transition-new(root) pseudo-element
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  const updateThemeState = () => {
    if (isDark) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-[var(--bg-secondary)]/10 text-[var(--text-primary)] transition-colors duration-200 z-50 relative"
      aria-label="Toggle Theme"
    >
       {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
};
