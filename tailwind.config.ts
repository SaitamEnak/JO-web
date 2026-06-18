import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        'cream-dark': 'var(--cream-dark)',
        purple: 'var(--purple)',
        'purple-light': 'var(--purple-light)',
        'purple-dark': 'var(--purple-dark)',
        violet: 'var(--violet)',
        lavender: 'var(--lavender)',
        pink: 'var(--pink)',
        soft: 'var(--soft)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        hand: ['Mynerve', 'cursive'],
      },
      backgroundImage: {
        'grad-gold': 'var(--grad-gold)',
        'grad-blush': 'var(--grad-blush)',
        'grad-mint': 'var(--grad-mint)',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
} satisfies Config;
