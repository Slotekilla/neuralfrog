import React from 'react';
import { Calendar, Gamepad2, Grid as Bridge, Coins } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      quarter: 'Q4 2025',
      title: 'Genesis Launch',
      description: 'Fair launch on pump.fun, AI meme generator live',
      icon: <Coins className="text-green-400" size={32} />,
      status: 'current',
      details: ['Fair launch on pump.fun', 'AI meme generator', 'Community building', 'Initial marketing']
    },
    {
      quarter: 'Q1 2026',
      title: 'Gaming Evolution',
      description: 'P2E Season 1, Neuro v2, Ethereum bridge',
      icon: <Gamepad2 className="text-cyan-400" size={32} />,
      status: 'upcoming',
      details: ['P2E Season 1 launch', 'Neuro v2 AI upgrade', 'Ethereum bridge deployment', 'TON Telegram integration']
    },
    {
      quarter: 'Q2 2026',
      title: 'Multi-Chain Expansion',
      description: 'XRP + TRON bridges, DAO Phase 2, mobile app',
      icon: <Bridge className="text-purple-400" size={32} />,
      status: 'upcoming',
      details: ['XRP Ledger bridge', 'TRON network bridge', 'DAO Phase 2 governance', 'Mobile app launch']
    },
    {
      quarter: 'Q3 2026+',
      title: 'Ecosystem Maturity',
      description: 'NFT integrations, cross-chain tournaments, 1M holders',
      icon: <Coins className="text-orange-400" size={32} />,
      status: 'upcoming',
      details: ['NFT battle integrations', 'Cross-chain tournaments', 'DAO treasury execution', '1M holders target']
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            Evolution Roadmap
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">Neuro's journey from pond to prediction master</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-400 to-cyan-400 hidden md:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-black z-10 hidden md:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`bg-black/70 backdrop-blur-sm border-2 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 ${
                    item.status === 'current' ? 'border-green-400 glow-effect' : 'border-green-400/30'
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      {item.icon}
                      <div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="text-gray-400" size={16} />
                          <span className="text-green-400 font-semibold font-orbitron">{item.quarter}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <span className="text-green-400">🐸</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {item.status === 'current' && (
                      <div className="mt-4">
                        <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Current Phase
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-4 font-orbitron">Join the Evolution</h3>
            <p className="text-gray-300 mb-6">Be part of Neuro's journey from the very beginning</p>
            <a 
              href="https://pump.fun/ABC123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-8 py-3 rounded-lg font-bold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 glow-effect inline-block"
            >
              Get $NRF Tokens Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;