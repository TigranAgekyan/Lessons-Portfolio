/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cherry_blossom_pink': { DEFAULT: '#ffb5c2', 100: '#570010', 200: '#ad0020', 300: '#ff0533', 400: '#ff5c7a', 500: '#ffb5c2', 600: '#ffc2cd', 700: '#ffd1da', 800: '#ffe0e6', 900: '#fff0f3' }, 
        'prussian_blue': { DEFAULT: '#153243', 100: '#040a0d', 200: '#08141a', 300: '#0c1e28', 400: '#112735', 500: '#153243', 600: '#296282', 700: '#3e92c2', 800: '#7eb6d6', 900: '#bfdbeb' },
        'indigo_dye': { DEFAULT: '#284b63', 100: '#080f14', 200: '#101e27', 300: '#182d3b', 400: '#203c4e', 500: '#284b63', 600: '#3e7397', 700: '#6099be', 800: '#95bbd4', 900: '#cadde9' },
        'ivory': { DEFAULT: '#f4f9e9', 100: '#3b4c15', 200: '#75982a', 300: '#a8d053', 400: '#cfe59f', 500: '#f4f9e9', 600: '#f7fbef', 700: '#f9fcf3', 800: '#fbfdf7', 900: '#fdfefb' },
        'alabaster': { DEFAULT: '#eef0eb', 100: '#313629', 200: '#626c52', 300: '#919e7f', 400: '#c0c7b5', 500: '#eef0eb', 600: '#f1f3ef', 700: '#f5f6f3', 800: '#f8f9f7', 900: '#fcfcfb' }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

