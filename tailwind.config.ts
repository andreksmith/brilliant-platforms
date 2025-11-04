import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0B0B0C',
        charcoal: '#16171A',
        'off-white': '#FAFAFA',
        accent: '#3B82F6',
        success: '#14B57A',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.06' },
          '50%': { opacity: '0.1' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
