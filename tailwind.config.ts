import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        'cyber': ['Cyber', 'sans-serif']
      },
      colors: {
        'darker': '#121212',
        'dark': '#1a1a1a',
        'card': '#1e1f22',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
export default config
