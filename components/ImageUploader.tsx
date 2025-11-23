
import React, { useRef, useState } from 'react';
import { UploadIcon } from './icons/UploadIcon';

interface ImageUploaderProps {
  onImageReady: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageReady }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      onImageReady(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };
  
  // Dynamic background style using CSS variable for RGB values
  const boxStyle = {
    backgroundColor: `rgba(var(--overlay-color), ${isDragging ? '0.1' : '0.05'})`
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <div
            className={`w-full p-8 border-2 border-dashed border-[var(--border-color)] rounded-lg text-center cursor-pointer transition-all duration-300 ${isDragging ? 'border-[var(--accent-primary)]' : ''}`}
            style={boxStyle}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
            />
            <div className="flex flex-col items-center justify-center text-[var(--text-secondary)] py-8">
                <UploadIcon className="w-16 h-16 mb-6 text-[var(--text-primary)]" />
                <p className="font-bold text-lg text-[var(--text-primary)]">Upload a Couple's Photo</p>
                <p className="text-sm">Drag & drop an image here, or <span className="text-[var(--accent-primary)] font-semibold">click to browse</span></p>
            </div>
        </div>
    </div>
  );
};

export default ImageUploader;
