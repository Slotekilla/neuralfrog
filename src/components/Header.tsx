import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-green-400/30' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/2061d194-caa5-4e6a-a2e9-06fd34ac1f9f.png" 
            alt="NeuralFrog Logo" 
            className="w-12 h-12 rounded-full glitch-effect"
          />
          <span className="text-xl font-bold font-orbitron text-green-400">$NEURALFROG</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('tokenomics')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Tokenomics
          </button>
          <button 
            onClick={() => scrollToSection('p2e-gaming')}
            className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            P2E Gaming
          </button>
          <button 
            onClick={() => scrollToSection('p2e-gaming')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            P2E Gaming
          </button>
          <button 
            onClick={() => scrollToSection('roadmap')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Roadmap
          </button>
          <button 
            onClick={() => scrollToSection('telegram-bot')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            AI Bot
          </button>
          <a 
            href="https://x.com/NRF_NeuralFrog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Twitter
          </a>
          <a 
            href="https://t.me/+boWp4yNfVqA3YzBk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Telegram
          </a>
          <a 
            href="https://discord.gg/BBYCq5QYeX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Discord
          </a>
          <a 
            href="https://pump.fun/ABC123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 glow-effect"
          >
            Buy $NRF Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-green-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-green-400/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')}
              className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('telegram-bot')}
              className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              AI Bot
            </button>
            <a 
              href="https://x.com/NRF_NeuralFrog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Twitter
            </a>
            <a 
              href="https://t.me/+boWp4yNfVqA3YzBk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Telegram
            </a>
            <a 
              href="https://discord.gg/BBYCq5QYeX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-left text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Discord
            </a>
            <a 
              href="https://pump.fun/ABC123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:from-green-300 hover:to-cyan-300 transition-all duration-200 text-center"
            >
              Buy $NRF Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;