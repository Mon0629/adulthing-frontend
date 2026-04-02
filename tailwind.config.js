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
        // NOTE: React Native doesn't support CSS vars like var(--primary).
        // Use a literal color so `text-primary` works on iOS/Android.
        primary: '#0E4C32',
        secondary: '#000000',
        tertiary: '#8C8C8C',
      },
      fontFamily: {
        arthaus: ['Arthaus-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
