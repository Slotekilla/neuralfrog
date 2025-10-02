import React from 'react';
import { Gamepad2, Trophy, Coins, Users, Zap, Shield } from 'lucide-react';

const P2EGaming: React.FC = () => {
  return (
    <section id="p2e-gaming" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            P2E Frog Battles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">Stake $NRF to enter seasonal competitions and earn rewards</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Game Info */}
          <div className="space-y-6">
            <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-400/20 p-3 rounded-full">
                  <Gamepad2 className="text-green-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-orbitron">Battle Arena</h3>
                  <p className="text-green-400">Seasonal Frog Competitions</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Enter your evolved Neuro frog into competitive battles against other holders. 
                Stake $NRF tokens to participate in seasonal tournaments with transparent reward pools 
                funded by the community treasury.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-green-400/10 rounded-lg">
                  <Trophy className="text-green-400" size={20} />
                  <span className="text-white text-sm">Tournament Rewards</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-cyan-400/10 rounded-lg">
                  <Coins className="text-cyan-400" size={20} />
                  <span className="text-white text-sm">Staking Required</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Features */}
          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="text-green-400" size={24} />
                <h4 className="text-xl font-bold text-green-400 font-orbitron">Community Driven</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Battle outcomes influenced by community votes and Neuro's evolving AI capabilities.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="text-cyan-400" size={24} />
                <h4 className="text-xl font-bold text-cyan-400 font-orbitron">Seasonal Events</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Regular tournaments with escalating rewards and special themed battles.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="text-purple-400" size={24} />
                <h4 className="text-xl font-bold text-purple-400 font-orbitron">Fair & Transparent</h4>
              </div>
              <p className="text-gray-300 text-sm">
                All reward pools and battle mechanics are transparently funded and governed by the community.
              </p>
            </div>
          </div>
        </div>

        {/* Game Mechanics */}
        <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-green-400 mb-6 text-center font-orbitron">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Stake $NRF</h4>
              <p className="text-gray-400 text-sm">
                Stake your $NRF tokens to enter your evolved Neuro frog into the battle arena
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Battle & Vote</h4>
              <p className="text-gray-400 text-sm">
                Participate in battles influenced by community votes and AI evolution stages
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Earn Rewards</h4>
              <p className="text-gray-400 text-sm">
                Win $NRF rewards from transparent community-funded prize pools
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-400/20 to-cyan-400/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-4 font-orbitron">Coming Q1 2026</h3>
            <p className="text-gray-300 mb-6">P2E Season 1 launches with the first official tournament</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://pump.fun/ABC123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-8 py-3 rounded-lg font-bold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 glow-effect"
              >
                Get $NRF to Participate
              </a>
              <button 
                onClick={() => document.getElementById('telegram-bot')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-200"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2EGaming;