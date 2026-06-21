import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B1020',
        surface: '#161F35',
        border: '#25304D',
        gold: '#C9A227',
      },
      boxShadow: {
        glow: '0 30px 60px rgba(201,162,39,0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
