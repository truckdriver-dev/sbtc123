import React from 'react';
import { Shield, Lock, Zap, TrendingUp, Users, Award } from 'lucide-react';

const TokenInfo: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: 'Permanently Locked Liquidity',
      description: 'Liquidity is permanently locked, ensuring long-term stability and investor protection.',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      title: 'Revoked Authority',
      description: 'Contract authority has been revoked, making the token completely decentralized.',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Zero Tax',
      description: 'No buy or sell taxes - trade freely without additional fees.',
      color: 'text-yellow-400'
    },
    {
      icon: TrendingUp,
      title: 'Deflationary Mechanism',
      description: 'Built-in token burning mechanism to reduce supply over time.',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Fully community-owned and operated with transparent governance.',
      color: 'text-pink-400'
    },
    {
      icon: Award,
      title: 'Exclusive Benefits',
      description: 'Holders get access to exclusive features and future airdrops.',
      color: 'text-cyan-400'
    }
  ];

  const tokenomics = [
    { label: 'Total Supply', value: '1,000,000,000 SBT' },
    { label: 'Circulating Supply', value: '800,000,000 SBT' },
    { label: 'Burned Tokens', value: '200,000,000 SBT' },
    { label: 'Liquidity Locked', value: '100%' },
    { label: 'Contract Renounced', value: 'Yes' },
    { label: 'Tax', value: '0%' }
  ];

  return (
    <div className="space-y-12">
      {/* Features Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F5FF] via-[#FF00E5] to-[#00F5FF] text-transparent bg-clip-text">
          Why Choose SBT Token?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color} mr-3`} />
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-[#B4B7FF] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tokenomics Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F5FF] via-[#FF00E5] to-[#00F5FF] text-transparent bg-clip-text">
          Tokenomics
        </h2>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenomics.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-[#B4B7FF] text-sm mb-2">{item.label}</p>
                <p className="text-2xl font-bold text-[#00F5FF]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#00F5FF] via-[#FF00E5] to-[#00F5FF] text-transparent bg-clip-text">
          Ready to Join the Revolution?
        </h2>
        <p className="text-xl text-[#B4B7FF] mb-8 max-w-2xl mx-auto">
          Check your eligibility above to see if you qualify for exclusive SBT Token benefits and create your personalized card.
        </p>
      </section>
    </div>
  );
};

export default TokenInfo;