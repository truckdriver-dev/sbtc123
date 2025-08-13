import React, { useState, useRef } from 'react';
import { Download, Upload, Share2 } from 'lucide-react';
import toast from 'react-hot-toast';
import ImageUploader from './ImageUploader';
import CardPreview from './CardPreview';
import TextEditor from './TextEditor';
import { CardTemplate } from '../types/card';
import { defaultTemplate } from '../data/cardTemplates';

const CardDesigner: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [template, setTemplate] = useState<CardTemplate>(defaultTemplate);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (imageDataUrl: string) => {
    setImage(imageDataUrl);
  };

  const handleBackgroundUpload = (imageDataUrl: string) => {
    setTemplate(prev => ({
      ...prev,
      backgroundImage: imageDataUrl
    }));
  };

  const handleTextChange = (field: keyof CardTemplate['text'], value: string) => {
    setTemplate(prev => ({
      ...prev,
      text: {
        ...prev.text,
        [field]: value
      }
    }));
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsGenerating(true);
      
      const htmlToImage = await import('html-to-image');
      
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        fontEmbedCSS: false
      });
      
      const link = document.createElement('a');
      link.download = 'sbt-card.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  const shareToTwitter = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsSharing(true);
      
      const htmlToImage = await import('html-to-image');
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        fontEmbedCSS: false
      });

      const tweetText = encodeURIComponent('Own $SOL? Congrats, you\'re approved! 🎉\n\nJust got my exclusive #SBT #SBTCard card!\n\nGet yours at https://sbttoken.com/check-eligibility');
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
      window.open(tweetUrl, '_blank');

      toast.success('Opening Twitter...');
    } catch (error) {
      console.error('Error sharing card:', error);
      toast.error('Failed to share card');
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto px-4">
      {/* Card Preview Section */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl shadow-lg border border-purple-500/10 p-4 sm:p-6">
        <h2 className="text-xl font-semibold text-[#00F5FF] mb-4">Preview</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-[280px] sm:max-w-[400px]">
            <CardPreview 
              ref={cardRef}
              template={template} 
              image={image} 
            />
          </div>
        </div>
        
        {!image && (
          <div className="mt-4 text-center text-[#B4B7FF]">
            <Upload className="mx-auto mb-2 text-[#00F5FF] w-6 h-6" />
            <p className="text-sm">Upload a logo to customize your card</p>
          </div>
        )}
      </div>

      {/* Controls Section */}
      <div className="flex flex-col gap-6">
        <div className="bg-black/20 backdrop-blur-sm rounded-xl shadow-lg border border-purple-500/10 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-[#00F5FF] mb-4">Upload Logo</h2>
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>

        <div className="bg-black/20 backdrop-blur-sm rounded-xl shadow-lg border border-purple-500/10 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-[#00F5FF] mb-4">Card Background</h2>
          <ImageUploader onImageUpload={handleBackgroundUpload} />
          <p className="mt-2 text-sm text-[#B4B7FF]">Upload an image to use as the card's background</p>
        </div>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl shadow-lg border border-purple-500/10 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-[#00F5FF] mb-4">Customize Card</h2>
          <TextEditor template={template} onTextChange={handleTextChange} />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={downloadCard}
            disabled={!image || isGenerating}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00F5FF] to-[#FF00E5] hover:from-[#00F5FF] hover:to-[#FF00E5] disabled:from-gray-600 disabled:to-gray-600 text-black font-bold rounded-xl py-4 sm:py-3 px-6 text-lg sm:text-base transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] disabled:shadow-none"
          >
            {isGenerating ? (
              <>Generating...</>
            ) : (
              <>
                <Download className="w-6 h-6 sm:w-5 sm:h-5" />
                Download Card
              </>
            )}
          </button>

          <button
            onClick={shareToTwitter}
            disabled={!image || isSharing}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] disabled:bg-gray-600 text-white font-bold rounded-xl py-4 sm:py-3 px-6 text-lg sm:text-base transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(29,161,242,0.3)] hover:shadow-[0_0_30px_rgba(29,161,242,0.4)] disabled:shadow-none"
          >
            {isSharing ? (
              <>Sharing...</>
            ) : (
              <>
                <Share2 className="w-6 h-6 sm:w-5 sm:h-5" />
                Share Card
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDesigner;