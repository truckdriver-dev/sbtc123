import React, { forwardRef } from 'react';
import { CardTemplate } from '../types/card';

interface CardPreviewProps {
  template: CardTemplate;
  image: string | null;
}

const CardPreview = forwardRef<HTMLDivElement, CardPreviewProps>(
  ({ template, image }, ref) => {
    const { width, height, text, backgroundColor, backgroundImage } = template;
    
    return (
      <div 
        ref={ref}
        className="relative overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-[1.01] w-full"
        style={{
          aspectRatio: `${width} / ${height}`,
          background: backgroundImage 
            ? `linear-gradient(135deg, rgba(10, 1, 24, 0.3), rgba(10, 1, 24, 0.2)), url(${backgroundImage}) center/cover no-repeat`
            : `linear-gradient(135deg, ${backgroundColor} 0%, #1E293B 100%)`,
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Card background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay"
               style={{
                 backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.4) 0%, transparent 50%)"
               }} />
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: "url('https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 mixBlendMode: 'overlay'
               }} />
        </div>

        {/* Chip image */}
        <div className="absolute top-[10%] left-[6%]">
          <img 
            src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Card chip"
            className="w-[12%] aspect-square object-cover rounded-lg opacity-80"
          />
        </div>

        {/* User uploaded logo */}
        {image && (
          <div 
            className="absolute" 
            style={{
              top: '8%',
              left: '5%',
              width: '20%',
              aspectRatio: '1',
              overflow: 'hidden',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <img 
              src={image} 
              alt="Card logo" 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Text elements */}
        <div className="absolute inset-0 p-[5%]">
          <div className="relative h-full flex flex-col justify-between">
            <div className="text-right">
              <p className="text-[4.5vw] sm:text-[24px] font-bold text-gray-300 tracking-wider">
                {text.title}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-[3.5vw] sm:text-[20px] font-medium text-gray-200 tracking-widest">
                {text.subtitle}
              </p>
              <p className="text-[3.2vw] sm:text-[18px] font-semibold text-gray-300 tracking-wider">
                {text.name}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[2.5vw] sm:text-[14px] text-gray-400">
                  VALID THRU
                </p>
                <p className="text-[3vw] sm:text-[16px] text-gray-300 tracking-wider">
                  {text.contact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CardPreview.displayName = 'CardPreview';

export default CardPreview;