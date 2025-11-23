
import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';
import { RetryIcon } from './icons/RetryIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface CaricatureDisplayProps {
  imageData: string;
  onRetry: () => void;
  onGenerateAgain: () => void;
}

const CaricatureDisplay: React.FC<CaricatureDisplayProps> = ({ imageData, onRetry, onGenerateAgain }) => {
  const imageUrl = `data:image/png;base64,${imageData}`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'caricature.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-8 section-heading">Your Caricature is Ready!</h2>
      <div className="w-full aspect-square bg-white p-4 border border-[var(--border-color)] shadow-xl rounded-lg">
          <img 
            src={imageUrl} 
            alt="Generated Caricature" 
            className="w-full h-full object-contain"
          />
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={onGenerateAgain}
          className="btn btn-primary gap-2"
        >
          <SparklesIcon className="w-5 h-5" />
          Generate Again
        </button>
        <button 
          onClick={handleDownload}
          className="btn btn-secondary gap-2"
        >
          <DownloadIcon className="w-5 h-5" />
          Download Image
        </button>
        <button 
          onClick={onRetry}
          className="btn btn-secondary gap-2"
        >
          <RetryIcon className="w-5 h-5" />
          Try Another Photo
        </button>
      </div>
      
      <div className="mt-6 max-w-lg mx-auto">
        <p className="text-sm text-[var(--text-secondary)] italic font-medium bg-[var(--bg-secondary)]/5 py-2 px-4 rounded-full">
          ✨ Pro Tip: For the best result, try generating 3 times and pick your favorite!
        </p>
      </div>
    </div>
  );
};

export default CaricatureDisplay;
