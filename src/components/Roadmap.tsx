import React from 'react';
import { Calendar, Gamepad2, Grid2x2 as Bridge, Coins, Users, Target, Bot, Zap, Globe, Brain } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      quarter: 'Q4 2025 - Phase 1: Launch',
      title: 'Fair Launch & Foundation',
      description: 'Fair launch on Pump.fun, Neuro AI Bot live, P2E Frog Battles Beta, XP System rollout',
      icon: <Coins className="text-green-400" size={32} />,
      status: 'current',
      details: [
        'Fair launch on Pump.fun (Solana)',
        'Neuro AI Bot fully live with 70% accuracy',
        'P2E Frog Battles Beta launch',
        'XP System rollout (Proof of Loyalty)',
        'Target: 10k holders, $1M market cap'
      ]
    },
    {
      quarter: 'Q1 2026 - Phase 2: Migration & Revenue Activation',
      title: 'Migration & Revenue Engine',
      description: 'Migration to new SPL contract, Protocol Revenue Engine & Buyback system go live, P2E full release',
      icon: <Gamepad2 className="text-cyan-400" size={32} />,
      status: 'upcoming',
      details: [
        'Migration to new SPL contract with full tokenomics',
        'Protocol Revenue Engine & Buyback system activation',
        'P2E Frog Battles full release',
        'First AI-assisted treasury actions',
        'Bridge to Ethereum',
        'Exchange outreach (MEXC, KuCoin, Gate)'
      ]
    },
    {
      quarter: 'Q2 2026 - Phase 3: Growth & Expansion',
      title: 'Multi-Chain Expansion',
      description: 'Cross-chain expansion (XRP, TRON, TON), Governance DAO rollout, Mobile app launch',
      icon: <Bridge className="text-purple-400" size={32} />,
      status: 'upcoming',
      details: [
        'Cross-chain expansion (XRP, TRON, TON)',
        'Governance DAO rollout with community voting',
        'Mobile app launch',
        'Influencer partnerships & brand collaborations',
        'API-based AI-as-a-Service (AaaS) revenue layer',
        'Target: $100M market cap, 100k holders'
      ]
    },
    {
      quarter: 'Q3–Q4 2026 - Phase 4: Global Scale-Up',
      title: 'Advanced AI Infrastructure',
      description: 'Launch FrogNet (AI cross-chain router), NeuroVerse Simulation Beta, NFT Frogverse launch',
      icon: <Bot className="text-orange-400" size={32} />,
      status: 'upcoming',
      details: [
        'Launch FrogNet (AI cross-chain liquidity router)',
        'NeuroVerse Simulation Beta - AI training arena',
        'NFT Frogverse launch with limited-edition collections',
        'Treasury DAO V2 (community managed)',
        'Institutional collaborations (DeFi, Gaming)',
        'Neural Intelligence Protocol (NIP) implementation'
      ]
    },
    {
      quarter: 'Q1 2027 - Phase 5: AI Economy Maturity',
      title: 'Institutional Adoption & Global Recognition',
      description: 'AI-as-a-Service rollout, Full Adaptive Treasury Automation, Neuro Super-App launch',
      icon: <Brain className="text-emerald-400" size={32} />,
      status: 'upcoming',
      details: [
        'AI-as-a-Service (AaaS) rollout with API subscriptions',
        'Full Adaptive Treasury Engine automation',
        'Neuro Super-App (Trading + Staking + P2E + Governance)',
        'Top-tier CEX listings (Binance, Coinbase, OKX)',
        'Proof of Intelligence (PoI) layer fully operational',
        'Target: $1B+ market cap, 1M+ holders'
      ]
    }
  ];

  const advancedFeatures = [
    {
      title: 'Neural Intelligence Protocol (NIP)',
      description: 'Transforms holders into active nodes of a decentralized AI brain',
      icon: <Brain className="text-green-400" size={24} />,
      details: [
        'Holders submit predictions for market trends',
        'AI aggregates and rewards accurate predictions',
        'Proof of Intelligence (PoI) ranking system',
        'Community teaches the AI through interactions'
      ]
    },
    {
      title: 'Adaptive Treasury Engine (ATE)',
      description: 'AI-powered financial decisions with automated buybacks and burns',
      icon: <Zap className="text-cyan-400" size={24} />,
      details: [
        'AI monitors market sentiment and volatility',
        'Automated weekly buybacks and burns',
        'Dynamic liquidity rebalancing across chains',
        'Community oversight through DAO dashboard'
      ]
    },
    {
      title: 'FrogNet Cross-Chain Router',
      description: 'AI-governed liquidity routing across multiple blockchains',
      icon: <Globe className="text-purple-400" size={24} />,
      details: [
        'Monitors trading volume across SOL, ETH, TON, TRON, XRP',
        'Dynamically shifts liquidity to active ecosystems',
        'Mirror supply via burn/mint logic',
        'DAO multisig confirmation for all actions'
      ]
    },
    {
      title: 'NeuroVerse Simulation Layer',
      description: 'Gamified AI training arena where users teach the NeuralFrog AI',
      icon: <Target className="text-orange-400" size={24} />,
      details: [
        'AI-driven trading and meme prediction games',
        'Players earn XP, PoI scores, and NFT collectibles',
        'AI learns from human risk-taking patterns',
        'Self-learning metagame with intelligence rewards'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            Evolution Roadmap V3.1
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">From meme to AI-powered ecosystem - the complete journey</p>
        </div>

        {/* Advanced Features Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-400 mb-8 text-center font-orbitron">Advanced AI Infrastructure</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {feature.icon}
                  <h4 className="text-xl font-bold text-white font-orbitron">{feature.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <span className="text-green-400">🧠</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

        {/* Revenue & Tokenomics Summary */}
        <div className="mt-16 bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-green-400 mb-6 text-center font-orbitron">Protocol Revenue Engine</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Revenue Streams</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Neuro AI Bot micro-fees (0.1–0.3 SOL per use)</li>
                <li>• P2E Battle entry fees (1–2% of prize pool)</li>
                <li>• API subscriptions (Q1 2026+)</li>
                <li>• Meme/NFT royalties and contests</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Revenue Allocation</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 50% → Buyback & Burn (weekly, automated)</li>
                <li>• 25% → Liquidity Reinforcement</li>
                <li>• 25% → DAO Treasury (marketing, development)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-4 font-orbitron">Join the AI Evolution</h3>
            <p className="text-gray-300 mb-6">Be part of the world's first AI-powered, self-learning meme economy</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://pump.fun/ABC123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-8 py-3 rounded-lg font-bold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 glow-effect inline-block"
              >
                Get $NRF Tokens Now
              </a>
              <a 
                href="/NeuralFrog ($NRF) — Whitepaper V3.1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
              >
                📄 Read Whitepaper V3.1
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;