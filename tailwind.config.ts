import type { Config } from 'tailwindcss';

// Mirrors futs-app/tailwind.config.js `app.*` tokens exactly, so the landing
// matches what a user sees the instant they open the real app.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#0a0d02',
          surface: '#161a11',
          surface2: '#6c9e21',
          border: 'rgba(255,255,255,0.07)',
          text: '#F7FBEA',
          secondary: '#AAB39A',
          muted: '#6E7760',
          accent: '#a4d618',
          gold: '#c9920a', // GOLD tier color (TIER_COLOR.GOLD) — not in the app's tailwind config
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
