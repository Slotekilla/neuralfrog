import React from 'react';
import { Bot, TrendingUp, MessageCircle, Zap } from 'lucide-react';

const TelegramBot: React.FC = () => {
  return (
    <section id="telegram-bot" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            AI Utility Bot
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
                Get AI predictions for crypto tokens including SOL, BTC, ETH, DOGE, and BONK. 
                Neuro provides pump scores, price move predictions, risk analysis, and buy/sell verdicts.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-green-400/10 rounded-lg">
                  <TrendingUp className="text-green-400" size={20} />
                  <span className="text-white text-sm">Crypto Predictions</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-cyan-400/10 rounded-lg">
                  <Zap className="text-cyan-400" size={20} />
                  <span className="text-white text-sm">Risk Analysis</span>
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
              <h4 className="text-xl font-bold text-green-400 mb-3 font-orbitron">🎯 Crypto Predictions</h4>
              <p className="text-gray-300 text-sm">
                Get predictions for SOL, BTC, ETH, DOGE, and BONK with pump scores, price moves, and risk analysis.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <h4 className="text-xl font-bold text-cyan-400 mb-3 font-orbitron">⚡ Buy/Sell Verdicts</h4>
              <p className="text-gray-300 text-sm">
                Receive clear buy/sell recommendations based on AI analysis of market conditions and risk factors.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <h4 className="text-xl font-bold text-purple-400 mb-3 font-orbitron">🧠 Easy Commands</h4>
              <p className="text-gray-300 text-sm">
                Simple commands like /predict, /predict BTC, /help, and /health make it easy to get AI insights.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
              <h4 className="text-xl font-bold text-orange-400 mb-3 font-orbitron">🔒 Always Available</h4>
              <p className="text-gray-300 text-sm">
                Available 24/7 for everyone. Start with /start to get greeted by Neuro the AI frog.
              </p>
            </div>
          </div>
        </div>

        {/* Bot Commands Preview */}
        <div className="mt-16 bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center font-orbitron">Bot Commands</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-400/10 rounded-lg">
              <code className="text-green-400 font-mono text-lg">/start</code>
              <p className="text-gray-300 text-sm mt-2">Get greeted by Neuro the AI frog</p>
            </div>
            <div className="text-center p-4 bg-cyan-400/10 rounded-lg">
              <code className="text-cyan-400 font-mono text-lg">/predict [TOKEN]</code>
              <p className="text-gray-300 text-sm mt-2">Get predictions for SOL, BTC, ETH, DOGE, BONK</p>
            </div>
            <div className="text-center p-4 bg-purple-400/10 rounded-lg">
              <code className="text-purple-400 font-mono text-lg">/help</code>
              <p className="text-gray-300 text-sm mt-2">Show all available commands</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="text-center p-4 bg-orange-400/10 rounded-lg">
              <code className="text-orange-400 font-mono text-lg">/id</code>
              <p className="text-gray-300 text-sm mt-2">Get your Chat ID and User ID</p>
            </div>
            <div className="text-center p-4 bg-red-400/10 rounded-lg">
              <code className="text-red-400 font-mono text-lg">/health</code>
              <p className="text-gray-300 text-sm mt-2">Quick health check - replies OK ✅</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBot;