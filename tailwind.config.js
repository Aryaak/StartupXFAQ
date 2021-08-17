module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#055F5B',
        cream: '#FBF9F8',
        dark: '#404247'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
