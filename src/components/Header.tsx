import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = 'JANN 0123456789';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast.success('Contract address copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy address');
    }
  };

  return (
    <header className="relative z-20 bg-black/20 backdrop-blur-sm border-b border-purple-500/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo and Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00F5FF] via-[#FF00E5] to-[#00F5FF] text-transparent bg-clip-text">
              SBT TOKEN
            </h1>
            <p className="text-lg text-[#B4B7FF] font-medium">
              Solana Benefit Transfer
            </p>
          </div>

          {/* Contract Address */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="bg-black/30 rounded-xl p-4 border border-purple-500/20">
              <p className="text-sm text-[#B4B7FF] mb-2 text-center lg:text-right">Contract Address</p>
              <div className="flex items-center gap-2">
                <code className="text-[#00F5FF] font-mono text-sm bg-black/50 px-3 py-2 rounded-lg">
                  {contractAddress}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="p-2 bg-[#00F5FF]/10 hover:bg-[#00F5FF]/20 rounded-lg transition-colors"
                  title="Copy contract address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#00F5FF]" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://twitter.com/sbttoken"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 rounded-xl transition-colors group"
                title="Follow on Twitter"
              >
                <ExternalLink className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://t.me/sbttoken"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 rounded-xl transition-colors group"
                title="Join Telegram"
              >
                <ExternalLink className="w-5 h-5 text-[#0088cc] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://dexscreener.com/solana/sbt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#FF00E5]/10 hover:bg-[#FF00E5]/20 rounded-xl transition-colors group"
                title="View on DEX Screener"
              >
                <ExternalLink className="w-5 h-5 text-[#FF00E5] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;