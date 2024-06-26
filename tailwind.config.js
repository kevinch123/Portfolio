/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'customBlue': '#250137',
        'neon-green': '#39FF14',
        'app-primary': '#295DFA',
        'app-secondary': '#4FE1D4',
        'app-white': '#FFFFFF',
        'app-black': '#081332',
        'app-gray': '#C5C5C5',
        'app-gray-black': '#5E6066',
        'app-light-background': '#F6FAFF',
        'app-light-background-2': '#ECFCFA',
        'app-dark-background': '#021C69',
        'app-border': '#C6D3FE',
        'app-warning': '#FC28FC',
        'app-success': '#996CFB',
        'app-info': '#D0DCFF',
        'app-shade': {
          1: '#295DFA',
          2: '#3E6DFB',
          3: '#547DFB',
          4: '#698EFC',
          5: '#94AEFF',
          6: '#D0DCFF',
        },
      },
      margin: {
        '-20px': '-20px',
      },
    },
  },
  plugins: [

  ],
};
