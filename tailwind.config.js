module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Ubuntu'],
      'mono': ['Lobster']
    },
    extend: {
      colors: {
        'pink-dark': '#EE9CA7',
        'pink-light' : 'rgb(246, 207, 211)',
        'main-color': '#6D6875',
        'dashboard': '#FAF3F2',
        'black': '#000'
      },
      borderWidth: {
        '18': '18px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
