
import React, { useState, useEffect, useRef } from 'react';

interface LoaderProps {
  onLoaded: () => void;
  progress: number; // Now accepts actual progress from App
}

const Loader: React.FC<LoaderProps> = ({ onLoaded, progress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Use a ref to keep track of the animation frame
  const requestRef = useRef<number>(0);

  useEffect(() => {
    // Smoothly animate displayProgress towards the actual progress prop
    const animate = () => {
      setDisplayProgress(prev => {
        const diff = progress - prev;
        if (Math.abs(diff) < 0.5) {
          return progress;
        }
        // Easing: move 10% of the distance towards target per frame
        return prev + diff * 0.1;
      });
      
      if (displayProgress < 100) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [progress, displayProgress]);

  // Trigger completion when we hit 100% visually
  useEffect(() => {
    if (displayProgress >= 100 && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(onLoaded, 1000); // Wait for zoom animation
      }, 500); // Short pause at 100% before exploding
      return () => clearTimeout(timer);
    }
  }, [displayProgress, isTransitioning, onLoaded]);

  // Round for display
  const percentageInt = Math.round(displayProgress);

  return (
    <div
      className={`loader-container ${isTransitioning ? 'transitioning' : ''}`}
    >
      <div className="loader-text-wrapper">
        <h1 className="loader-text loader-text-bg">Caricature AI</h1>
        <h1
          className="loader-text loader-text-fg"
          style={{ clipPath: `inset(0 ${100 - percentageInt}% 0 0)` }}
        >
          Caricature AI
        </h1>
      </div>
      <p className="loader-percentage">
        loading assets... {percentageInt}%
      </p>
    </div>
  );
};

export default Loader;
