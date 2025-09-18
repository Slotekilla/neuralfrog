/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'neon-green': '#00ff41',
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff0040',
        'cyber-blue': '#0066ff',
        'matrix-green': '#00cc33',
      },
      animation: {
        'glitch': 'glitch 2s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00ff41 0%, #00ffff 50%, #0066ff 100%)',
        'gradient-matrix': 'linear-gradient(90deg, #000000 0%, #001100 50%, #000000 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 65, 0.5)',
        'neon-strong': '0 0 30px rgba(0, 255, 65, 0.8)',
        'cyber': '0 4px 20px rgba(0, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};