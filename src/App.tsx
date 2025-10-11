import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import P2EGaming from './components/P2EGaming';
import Roadmap from './components/Roadmap';
import TelegramBot from './components/TelegramBot';
import MemeGallery from './components/MemeGallery';
import Footer from './components/Footer';
import Whitepaper from './components/Whitepaper'; // ⬅️ DODANO
import './styles/glitch.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-rajdhani">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Whitepaper />   {/* ⬅️ DODANO: embed se prikaže tukaj */}
      <P2EGaming />
      <TelegramBot />
      <Roadmap />
      <MemeGallery />
      <Footer />
    </div>
  );
}

export default App;
