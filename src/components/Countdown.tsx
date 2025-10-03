import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLaunched: false
  });

  useEffect(() => {
    // Launch date: October 10th, 2025 at 8PM UTC+1 (7PM UTC)
    const launchDate = new Date('2025-10-10T19:00:00Z').getTime(); // 8PM UTC+1 = 7PM UTC

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLaunched: true
        });
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isLaunched: false
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isLaunched) {
    return (
      <div className="bg-green-400/20 backdrop-blur-sm border border-green-400 rounded-xl p-6 mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Clock className="text-green-400" size={24} />
            <span className="text-2xl font-bold text-green-400 font-orbitron">🚀 LAUNCHED!</span>
          </div>
          <p className="text-white">NeuralFrog is now live on pump.fun!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/10 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 mb-8">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Clock className="text-green-400" size={24} />
          <span className="text-xl font-bold text-green-400 font-orbitron">Launch Countdown</span>
        </div>
        <p className="text-gray-300 text-sm">October 10th, 2025 • 8:00 PM UTC+1</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="bg-green-400/20 rounded-lg p-3 mb-2">
            <span className="text-3xl font-bold text-green-400 font-orbitron">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-400 text-sm font-semibold">DAYS</span>
        </div>
        
        <div className="text-center">
          <div className="bg-cyan-400/20 rounded-lg p-3 mb-2">
            <span className="text-3xl font-bold text-cyan-400 font-orbitron">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-400 text-sm font-semibold">HOURS</span>
        </div>
        
        <div className="text-center">
          <div className="bg-purple-400/20 rounded-lg p-3 mb-2">
            <span className="text-3xl font-bold text-purple-400 font-orbitron">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-400 text-sm font-semibold">MINUTES</span>
        </div>
        
        <div className="text-center">
          <div className="bg-orange-400/20 rounded-lg p-3 mb-2">
            <span className="text-3xl font-bold text-orange-400 font-orbitron">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-400 text-sm font-semibold">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;