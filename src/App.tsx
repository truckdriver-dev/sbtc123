import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import EligibilityChecker from './components/EligibilityChecker';
import CardDesigner from './components/CardDesigner';
import TokenInfo from './components/TokenInfo';
import Footer from './components/Footer';

function App() {
  const [isEligible, setIsEligible] = useState(false);
  const [showDesigner, setShowDesigner] = useState(false);

  const handleEligibilityCheck = () => {
    setIsEligible(true);
    setTimeout(() => {
      setShowDesigner(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0118] via-[#1a0b2e] to-[#16213e]">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a0b2e',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF00E5]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-12">
          {!showDesigner ? (
            <>
              <EligibilityChecker 
                onCheck={handleEligibilityCheck}
                isEligible={isEligible}
              />
              <TokenInfo />
            </>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] via-[#FF00E5] to-[#00F5FF] text-transparent bg-clip-text">
                  Congratulations! You're Approved! 🎉
                </h2>
                <p className="text-xl text-[#B4B7FF] mb-8">
                  Create your personalized SBT Card below
                </p>
              </div>
              <CardDesigner />
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;