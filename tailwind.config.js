/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: '#fff',
        trans:'#ffffffcc',
        transDark:'#202025cc',
        dark:'#000',
        darkBg:'#202025',
        second:'#06a4ff',
        third:'#8756ff',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        'screen': '100vh',
      }
    },
  },
  plugins: [],
}

