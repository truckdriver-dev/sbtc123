import React, { useState } from 'react';
import { Sparkles, CheckCircle, Loader } from 'lucide-react';

interface EligibilityCheckerProps {
  onCheck: () => void;
  isEligible: boolean;
}

const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onCheck, isEligible }) => {
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      onCheck();
    }, 2000);
  };

  if (isEligible) {
    return (
      <div className="text-center py-12">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <CheckCircle className="w-24 h-24 text-green-400 animate-pulse" />
            <div className="absolute inset-0 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-ping" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
          Approved! ✅
        </h2>
        <p className="text-xl text-[#B4B7FF] mb-8">
          Your wallet is eligible for SBT Token benefits!
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <Sparkles className="w-24 h-24 text-[#00F5FF] animate-pulse" />
          <div className="absolute inset-0 w-24 h-24 bg-[#00F5FF]/20 rounded-full blur-xl animate-ping" />
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00F5FF] via-[#FF00E5] to-[#00F5FF] text-transparent bg-clip-text">
        Check Your SBT Card Eligibility
      </h2>

      <p className="text-xl text-[#B4B7FF] mb-8 max-w-2xl mx-auto leading-relaxed">
        Our advanced AI will analyze your wallet to determine if you qualify for exclusive SBT Token benefits and card creation privileges.
      </p>

      <button
        onClick={handleCheck}
        disabled={isChecking}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00F5FF] to-[#FF00E5] hover:from-[#00F5FF] hover:to-[#FF00E5] disabled:from-gray-600 disabled:to-gray-600 text-black font-bold rounded-xl py-4 px-8 text-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] disabled:shadow-none"
      >
        {isChecking ? (
          <>
            <Loader className="w-6 h-6 animate-spin" />
            Analyzing Wallet...
          </>
        ) : (
          <>
            <Sparkles className="w-6 h-6" />
            Check Eligibility
          </>
        )}
      </button>

      {isChecking && (
        <div className="mt-8 space-y-2">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-[#00F5FF] rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-[#FF00E5] rounded-full animate-bounce delay-100" />
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200" />
          </div>
          <p className="text-[#B4B7FF] text-sm">
            Scanning blockchain for eligibility criteria...
          </p>
        </div>
      )}
    </div>
  );
};

export default EligibilityChecker;