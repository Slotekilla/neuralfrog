import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            Meet Neuro
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              NeuralFrog ($NRF) is the first <span className="text-green-400 font-semibold">AI-driven, self-learning meme economy</span> - merging AI, 
              community intelligence, and meme culture into a living financial organism. At its heart is Neuro, a neon-green AI frog evolving through user interactions and 
              community-driven decisions.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-semibold">
              <span className="text-cyan-400">This isn't just a token - it's a movement</span>, combining viral culture with machine intelligence and 
              <span className="text-green-400">real, sustainable on-chain revenue sharing</span>. Fair launch on Pump.fun → Full ecosystem with revenue distribution. 🐸
            </p>

            {/* Core Technology Pillars */}
            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-orbitron">🧠 Core AI Infrastructure</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">Neural Intelligence Protocol (NIP):</span>
                    <span className="text-gray-300"> Transforms holders into active nodes of a decentralized AI brain</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">Adaptive Treasury Engine (ATE):</span>
                    <span className="text-gray-300"> AI-powered automated buybacks and liquidity management</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">FrogNet Cross-Chain Router:</span>
                    <span className="text-gray-300"> AI-governed liquidity routing across multiple blockchains</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">XP System (Proof of Loyalty):</span>
                    <span className="text-gray-300"> Gamified reputation layer converting activity to real rewards</span>
                  </div>
                </div>
              </div>
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-black/50 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-colors duration-200">
                <Brain className="text-green-400 mx-auto mb-3" size={40} />
                <h3 className="text-white font-semibold mb-2">AI Trading Tools</h3>
                <p className="text-gray-400 text-sm">Real-time BUY/WATCH/AVOID calls with ~70% accuracy</p>
              </div>
              
              <div className="text-center p-6 bg-black/50 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-colors duration-200">
                <Target className="text-green-400 mx-auto mb-3" size={40} />
                <h3 className="text-white font-semibold mb-2">P2E Battles</h3>
                <p className="text-gray-400 text-sm">Stake NRF to train Neuro in AI-simulated trading battles</p>
              </div>
              
              <div className="text-center p-6 bg-black/50 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-colors duration-200">
                <TrendingUp className="text-green-400 mx-auto mb-3" size={40} />
                <h3 className="text-white font-semibold mb-2">Two-Phase Launch</h3>
                <p className="text-gray-400 text-sm">Fair launch evolving to structured tokenomics</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/8d5e2d4a-3bd8-42e0-b26a-a7545b3c6d3d.png"
              alt="NeuralFrog Evolution Chamber"
              className="w-full rounded-lg shadow-2xl glitch-effect border border-green-400/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;