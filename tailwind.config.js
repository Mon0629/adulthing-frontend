/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './App.tsx',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0E4C32',
        secondary: '#000000',
        tertiary: '#8C8C8C',
      },
      fontFamily: {
        arthaus: ['Arthaus-Bold', 'sans-serif'],
      },
      backgroundColor: {
        DEFAULT: '#FFFFFF',
      },
      fontSize: {
        DEFAULT: '16px',
      },
    },
  },
  plugins: [],
};
