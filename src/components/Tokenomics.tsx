import React from 'react';
import { Lock, Gift, Megaphone, Users, Flame, ArrowRight, Target } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const phase1Data = [
    {
      allocation: 'Liquidity Pool',
      percentage: '100%',
      details: 'Fair launch - all supply into LP',
      icon: <Lock className="text-blue-400" size={24} />,
      color: 'border-blue-400/50 hover:border-blue-400'
    }
  ];

  const phase2Data = [
    {
      allocation: 'Liquidity Pool',
      percentage: '60%',
      details: 'Locked 24 months on Raydium',
      icon: <Lock className="text-blue-400" size={24} />,
      color: 'border-blue-400/50 hover:border-blue-400'
    },
    {
      allocation: 'Community Rewards/Airdrops',
      percentage: '20%',
      details: 'AI-voted challenges & airdrops',
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
      details: 'Vested (12m cliff + 24m linear)',
      icon: <Users className="text-cyan-400" size={24} />,
      color: 'border-cyan-400/50 hover:border-cyan-400'
    },
    {
      allocation: 'Burn Wallet',
      percentage: '5%',
      details: 'Initial + ongoing burns',
      icon: <Flame className="text-red-400" size={24} />,
      color: 'border-red-400/50 hover:border-red-400'
    }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            Two-Phase Tokenomics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">Fair launch evolving to structured tokenomics</p>
        </div>

        {/* Phase Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 hover:border-green-400/60 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-400/20 p-3 rounded-full">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-400 font-orbitron">Phase 1: Fair Launch</h3>
                <p className="text-gray-300">Current - Pump.fun</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• 100% supply into liquidity pool</li>
              <li>• No team/marketing allocations</li>
              <li>• Founder buys like everyone else</li>
              <li>• Pure community trust</li>
            </ul>
          </div>

          <div className="bg-black/70 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-8 hover:border-cyan-400/60 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cyan-400/20 p-3 rounded-full">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 font-orbitron">Phase 2: Migration</h3>
                <p className="text-gray-300">After milestones</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Official tokenomics structure</li>
              <li>• Team vesting & liquidity locks</li>
              <li>• Transaction taxes enabled</li>
              <li>• Professional upgrade</li>
            </ul>
          </div>
        </div>

        {/* Migration Trigger */}
        <div className="bg-gradient-to-r from-green-400/20 to-cyan-400/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-green-400 mb-6 text-center font-orbitron">Migration Triggers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-400" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">$1M Market Cap</h4>
              <p className="text-gray-400 text-sm">Minimum market capitalization threshold</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-cyan-400" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">5,000 Holders</h4>
              <p className="text-gray-400 text-sm">Strong community base established</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-400" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">10K Community</h4>
              <p className="text-gray-400 text-sm">Combined Telegram + X followers</p>
            </div>
          </div>
        </div>

        {/* Phase 1 Tokenomics */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-green-400 mb-6 text-center font-orbitron">Phase 1: Current (Pump.fun)</h3>
          <div className="bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl overflow-hidden">
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
                  {phase1Data.map((item, index) => (
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
        </div>

        {/* Arrow */}
        <div className="text-center mb-12">
          <ArrowRight className="text-green-400 mx-auto" size={48} />
          <p className="text-gray-300 mt-2">Migration after milestones</p>
        </div>

        {/* Phase 2 Tokenomics */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center font-orbitron">Phase 2: Post-Migration</h3>
          <div className="bg-black/70 backdrop-blur-sm border border-cyan-400/30 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-cyan-400 font-bold font-orbitron">Allocation</th>
                    <th className="px-6 py-4 text-center text-cyan-400 font-bold font-orbitron">Percentage</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-bold font-orbitron">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2Data.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-cyan-400/20 hover:bg-cyan-400/5 transition-colors duration-200 ${item.color}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="text-white font-semibold">{item.allocation}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-cyan-400">{item.percentage}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tax Structure Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-colors duration-200">
            <h3 className="text-2xl font-bold text-green-400 mb-4 font-orbitron">Phase 1 Tax</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tax:</span>
                <span className="text-white font-semibold">Pump.fun Standard</span>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Standard pump.fun creator rewards during fair launch phase
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition-colors duration-200">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-orbitron">Phase 2 Tax</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tax:</span>
                <span className="text-white font-semibold">5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">• Burn:</span>
                <span className="text-white font-semibold">1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">• Holder Rewards:</span>
                <span className="text-white font-semibold">2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">• Auto-Liquidity:</span>
                <span className="text-white font-semibold">2%</span>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Activated after migration to official contract
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;