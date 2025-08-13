import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
      onImageUpload(result);
    };
    
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    onImageUpload('');
  };

  return (
    <div className="w-full">
      {previewUrl ? (
        <div className="relative border border-purple-500/10 rounded-xl overflow-hidden bg-black/30">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-48 object-contain"
          />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 bg-black/50 p-2 rounded-full shadow-lg hover:bg-black/70 transition-colors"
            aria-label="Remove image"
          >
            <X className="w-5 h-5 text-[#FF00E5]" />
          </button>
          <p className="text-center py-3 text-sm text-[#B4B7FF]">Click the X to remove or choose another logo</p>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            dragActive 
              ? "border-[#00F5FF] bg-[#00F5FF]/10" 
              : "border-purple-500/30 hover:border-[#00F5FF] hover:bg-[#00F5FF]/5"
          }`}
        >
          <Upload className="mx-auto mb-4 text-[#00F5FF] w-12 h-12 sm:w-10 sm:h-10" />
          <p className="mb-2 text-white text-lg sm:text-base">Drag and drop your logo here</p>
          <p className="mb-4 text-sm text-[#B4B7FF]">or</p>
          <button
            onClick={handleButtonClick}
            className="bg-gradient-to-r from-[#00F5FF] to-[#FF00E5] text-black font-bold rounded-xl py-4 sm:py-3 px-6 text-lg sm:text-base transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
          >
            Choose File
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;