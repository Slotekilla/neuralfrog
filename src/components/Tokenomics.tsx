import React from 'react';
import { Lock, Gift, Megaphone, Users, Flame } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const tokenomicsData = [
    {
      allocation: 'Liquidity Pool',
      percentage: '60%',
      details: 'Locked 2 years on Raydium',
      icon: <Lock className="text-blue-400" size={24} />,
      color: 'border-blue-400/50 hover:border-blue-400'
    },
    {
      allocation: 'Community Rewards/Airdrops',
      percentage: '20%',
      details: 'AI-voted challenges',
      icon: <Gift className="text-purple-400" size={24} />,
      color: 'border-purple-400/50 hover:border-purple-400'
    },
    {
      allocation: 'Marketing/Partnerships',
      percentage: '10%',
      details: 'Viral campaigns, influencers',
      icon: <Megaphone className="text-orange-400" size={24} />,
      color: 'border-orange-400/50 hover:border-orange-400'
    },
    {
      allocation: 'Team',
      percentage: '5%',
      details: 'Vested 12 months',
      icon: <Users className="text-cyan-400" size={24} />,
      color: 'border-cyan-400/50 hover:border-cyan-400'
    },
    {
      allocation: 'Burn Wallet',
      percentage: '5%',
      details: 'Initial + 1% tx burn',
      icon: <Flame className="text-red-400" size={24} />,
      color: 'border-red-400/50 hover:border-red-400'
    }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            Tokenomics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">Fair distribution with community focus</p>
        </div>

        {/* Tokenomics Table */}
        <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-400/20 to-cyan-400/20">
                <tr>
                  <th className="px-6 py-4 text-left text-green-400 font-bold font-orbitron">Allocation</th>
                  <th className="px-6 py-4 text-center text-green-400 font-bold font-orbitron">Percentage</th>
                  <th className="px-6 py-4 text-left text-green-400 font-bold font-orbitron">Details</th>
                </tr>
              </thead>
              <tbody>
                {tokenomicsData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-green-400/20 hover:bg-green-400/5 transition-colors duration-200 ${item.color}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="text-white font-semibold">{item.allocation}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-2xl font-bold text-green-400">{item.percentage}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
            <h3 className="text-2xl font-bold text-green-400 mb-4 font-orbitron">Tax Structure</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tax:</span>
                <span className="text-white font-semibold">2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">• Pump.fun Fee:</span>
                <span className="text-white font-semibold">1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">• Creator Fee:</span>
                <span className="text-white font-semibold">1%</span>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Fair launch on pump.fun with transparent fee structure
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
            <h3 className="text-2xl font-bold text-green-400 mb-4 font-orbitron">Airdrop Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Airdrop Trigger:</span>
                <span className="text-white font-semibold">10,000 Holders</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Eligible Holders:</span>
                <span className="text-white font-semibold">First 10,000 Only</span>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Early holders get exclusive airdrops when 10,000 holder milestone is reached
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;