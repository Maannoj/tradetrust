import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
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
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
