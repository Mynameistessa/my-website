/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'body': ['"Inter var"', '"Roboto"', '"Open Sans"'],
      },
      colors: {
        'seablue': '#E3F6FF',
        'sky-900': '#0c4a6e',
        'sky-800': '#075985',
        'sky-600': '#0284c7',
        'white': '#FFFFFF',
        'pesto': '#ABC270',
        'wood': '#473C33',
        'warm-yellow': '#FEC868',
        'peach-orange': '#FDA769',
        'purple-blue': '#041C32',
        'platinum-grey': '#E5E4E2',
        'byzantium': '#702963',
        'lavendar': '#673147',
        'almost-black': '#0F0E0E',
        'ash-green': '#A0C1B8',
        'navy': '#0A2647',
        'soft-blue': '#2C74B3',
        'brick-red': '#AA4A44',
        'darker-brick': '#661c17',
        'dolphin-blue': '#00E7FF',
        'grey': '#ECECEC',
        'ivory': '#fffff0',
        'miffy': '#003D6D',
        'neutral-900': '#171717',
        'slate-800': '#1e293b',
        'light-pink': '#FCC8D1',
        'another-blue': '#0079FF'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
