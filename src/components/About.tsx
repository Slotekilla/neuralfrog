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
              Neuro starts as a glitchy pond frog but evolves via holder votes into a hyper-intelligent trader. 
              Satirizing AI overlords while building real utility—meme generator, market predictions, DeFi yields.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-semibold">
              In a world of bots, one frog hops ahead. 🐸
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-black/50 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-colors duration-200">
                <Brain className="text-green-400 mx-auto mb-3" size={40} />
                <h3 className="text-white font-semibold mb-2">AI Evolution</h3>
                <p className="text-gray-400 text-sm">Community-driven intelligence upgrades</p>
              </div>
              
              <div className="text-center p-6 bg-black/50 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-colors duration-200">
                <Target className="text-green-400 mx-auto mb-3" size={40} />
                <h3 className="text-white font-semibold mb-2">Predictions</h3>
                <p className="text-gray-400 text-sm">Advanced market analysis and calls</p>
              </div>
              
              <div className="text-center p-6 bg-black/50 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-colors duration-200">
                <TrendingUp className="text-green-400 mx-auto mb-3" size={40} />
                <h3 className="text-white font-semibold mb-2">DeFi Yields</h3>
                <p className="text-gray-400 text-sm">Automated yield farming strategies</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/public/8d5e2d4a-3bd8-42e0-b26a-a7545b3c6d3d.png"
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