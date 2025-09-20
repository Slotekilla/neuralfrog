import React from 'react';
import { Bot, TrendingUp, MessageCircle, Zap } from 'lucide-react';

const TelegramBot: React.FC = () => {
  return (
    <section id="telegram-bot" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            AI Prediction Bot
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">Neuro's AI brain now available 24/7 on Telegram</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bot Info */}
          <div className="space-y-6">
            <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-400/20 p-3 rounded-full">
                  <Bot className="text-green-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-orbitron">@NeuroFrogBot</h3>
                  <p className="text-green-400">AI-Powered SOL Predictions</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Get real-time AI analysis and predictions for Solana tokens. Neuro analyzes market data, 
                social sentiment, and trading patterns to give you actionable buy/sell signals.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-green-400/10 rounded-lg">
                  <TrendingUp className="text-green-400" size={20} />
                  <span className="text-white text-sm">SOL Pump Predictions</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-cyan-400/10 rounded-lg">
                  <Zap className="text-cyan-400" size={20} />
                  <span className="text-white text-sm">Real-time Analysis</span>
                </div>
              </div>

              <a 
                href="https://t.me/NeuroFrogBot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-black px-6 py-4 rounded-lg font-bold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 glow-effect flex items-center justify-center space-x-3 transform hover:scale-105"
              >
                <MessageCircle size={24} />
                <span>Start Chatting with @NeuroFrogBot</span>
              </a>
            </div>
          </div>

          {/* Bot Features */}
          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <h4 className="text-xl font-bold text-green-400 mb-3 font-orbitron">🎯 Smart Predictions</h4>
              <p className="text-gray-300 text-sm">
                Advanced AI algorithms analyze market trends, volume patterns, and social sentiment to predict SOL token movements.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <h4 className="text-xl font-bold text-cyan-400 mb-3 font-orbitron">⚡ Instant Alerts</h4>
              <p className="text-gray-300 text-sm">
                Get immediate notifications when Neuro detects potential pump opportunities or recommends avoiding risky trades.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <h4 className="text-xl font-bold text-purple-400 mb-3 font-orbitron">🧠 AI Evolution</h4>
              <p className="text-gray-300 text-sm">
                The bot learns from market data and community feedback, becoming smarter with each prediction and trade analysis.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <h4 className="text-xl font-bold text-orange-400 mb-3 font-orbitron">🔒 Free Access</h4>
              <p className="text-gray-300 text-sm">
                Available 24/7 for all $NRF holders. Premium features unlock with higher token holdings.
              </p>
            </div>
          </div>
        </div>

        {/* Bot Commands Preview */}
        <div className="mt-16 bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center font-orbitron">Bot Commands</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-400/10 rounded-lg">
              <code className="text-green-400 font-mono text-lg">/predict [TOKEN]</code>
              <p className="text-gray-300 text-sm mt-2">Get AI prediction for any SOL token</p>
            </div>
            <div className="text-center p-4 bg-cyan-400/10 rounded-lg">
              <code className="text-cyan-400 font-mono text-lg">/alerts</code>
              <p className="text-gray-300 text-sm mt-2">Enable/disable pump notifications</p>
            </div>
            <div className="text-center p-4 bg-purple-400/10 rounded-lg">
              <code className="text-purple-400 font-mono text-lg">/portfolio</code>
              <p className="text-gray-300 text-sm mt-2">Track your SOL holdings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBot;