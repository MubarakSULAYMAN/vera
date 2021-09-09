const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
    },

    extend: {
      colors: {
        primary: '#000000',
        'v-black': '#000000',
        'v-black-light': '#212b36',
        'v-gray-dark': '#666666',
        'v-gray': '#979797',
        'v-gray-light': '#f6f6f6',
        'v-yellow': '#f1c34e',
        'v-red': '#EB5757',
        'v-green': '#285017',
        'v-green-olive': '#7CAB5B',
      }
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      textColor: ['first', 'last'],
      // backgroundColor: ['first', 'last', 'odd'],
      backgroundColor: ['even'],
      placeholderColor: [],
      animation: ['motion-safe']
    }
  },
  plugins: []
}
