import React from 'react';
import { Rocket, Zap } from 'lucide-react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/415093c7-58d6-4910-93d5-08eba44e9719.png"
          alt="NeuralFrog AI Cyberpunk Scene"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-bg opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-black font-orbitron mb-4 glitch-text">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              $NEURALFROG
            </span>
          </h1>
          <div className="text-xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
            <span>The AI Frog That Predicts Your Gains</span>
            <span className="text-2xl">🐸</span>
            <Rocket className="text-green-400" size={32} />
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          The world's first AI-driven, self-learning meme economy - merging AI, community intelligence, and meme culture into a living financial organism.<br />
          <span className="text-green-400 font-semibold">Real revenue sharing, AI-powered predictions, and community-driven evolution.</span> Fair launch on pump.fun.
        </p>

        <Countdown />

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="https://pump.fun/coin/H2VJmEGdm2ihZoN3ia1o1VK8ta5wJxW2XUGMKVZbpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-8 py-4 rounded-lg text-xl font-bold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 glow-effect transform hover:scale-105 flex items-center space-x-2"
          >
            <Zap size={24} />
            <span>Buy $NRF Now</span>
          </a>
          
          <a 
            href="/NeuralFrog ($NRF) — Whitepaper V3.1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-400/10 transition-all duration-200 flex items-center space-x-2"
          >
            <span>📄 Read Whitepaper V3.1</span>
            <span className="text-xl">🧠</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">1B</div>
            <div className="text-sm text-gray-400">Total Supply</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">Fair</div>
            <div className="text-sm text-gray-400">Launch</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-sm text-gray-400">Into LP</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">AI</div>
            <div className="text-sm text-gray-400">Evolution</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;