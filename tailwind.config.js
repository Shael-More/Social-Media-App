/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      height: {
        'custom-height': 'calc(100vh - 48px)'
      },
    
    },
  },
  plugins: [],
};