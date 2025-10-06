import React from 'react';
import { Twitter, MessageCircle, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/NRF_NeuralFrog',
      icon: <Twitter size={24} />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/+boWp4yNfVqA3YzBk',
      icon: <MessageCircle size={24} />,
      color: 'hover:text-cyan-400'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/BBYCq5QYeX',
      icon: <Users size={24} />,
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <footer className="bg-black border-t border-green-400/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/2061d194-caa5-4e6a-a2e9-06fd34ac1f9f.png" 
                alt="NeuralFrog Logo" 
                className="w-12 h-12 rounded-full"
              />
              <span className="text-2xl font-bold font-orbitron text-green-400">$NEURALFROG</span>
            </div>
            <p className="text-gray-400">
              The AI-evolving meme coin that predicts your gains. 
              Join the revolution on Solana blockchain.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-orbitron">Join Our Community</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200 p-3 bg-gray-900 rounded-full hover:bg-gray-800`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Contract:</span> Coming soon...
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Chain:</span> Solana
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-orbitron">Quick Actions</h3>
            <div className="space-y-3">
              <a 
                href="https://pump.fun/ABC123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-400 to-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 text-center"
              >
                Buy $NRF Now
              </a>
              <a 
                href="/NeuralFrog ($NRF) — Whitepaper V3.1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200 text-center"
              >
                📄 Download Whitepaper V3.1
              </a>
              <button 
                onClick={() => document.getElementById('tokenomics')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full border border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-200 text-center"
              >
                View Tokenomics
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-400/30 text-center space-y-4">
          <div className="text-yellow-400 font-semibold bg-yellow-400/10 px-6 py-3 rounded-lg border border-yellow-400/30">
            ⚠️ DYOR - Not financial advice. Cryptocurrency investments carry significant risk.
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 NeuralFrog. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-green-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-green-400 transition-colors">Terms of Service</button>
              <button className="hover:text-green-400 transition-colors">Whitepaper</button>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 max-w-2xl mx-auto">
            NeuralFrog ($NRF) is a meme coin with no intrinsic value or expectation of financial return. 
            The token is for entertainment purposes only. Always conduct your own research and never invest more than you can afford to lose.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;