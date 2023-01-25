/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./ node_modules / tw - elements / dist / ts/**/ *.ts"
  ],
  purge: ['./src/**/*.tsx'],
  theme: {
    typography: (theme) => ({}),
    extend: {},
    colors: {
      'seablue': '#E3F6FF',
      'sky-900': '#0c4a6e',
      'sky-800': '#075985',
      'sky-600': '#0284c7',
      'neutral-900': '#171717',
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

      'dolphin-blue': '#00E7FF',

      'grey': '#ECECEC'
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tw-elements/dist/plugin')],
  variants: {},
}
