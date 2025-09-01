import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Example primary color
        secondary: '#14171A', // Example secondary color
      },
      fontFamily: {
        sans: ['GeistVF', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
};

export default config;