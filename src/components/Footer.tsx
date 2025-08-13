import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-black/20 backdrop-blur-sm border-t border-purple-500/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-[#B4B7FF] mb-4">
            Built with <Heart className="inline w-4 h-4 text-red-400 mx-1" /> for the Solana community
          </p>
          <p className="text-sm text-[#B4B7FF]/70">
            © 2024 SBT Token. All rights reserved. | Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;