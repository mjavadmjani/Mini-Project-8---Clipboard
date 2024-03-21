/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    screens: {
      sm: {max: '480px'},
      md: {max: '768px'},
      lg: {max: '976px'},
      xl: {max: '1440px'},
    },
    colors: {
      strongCyan: 'hsl(171, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayishBlue: 'hsl(210, 10%, 33%)',
      grayishBlue: 'hsl(201, 11%, 66%)',
    },
    fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif'],
    },
  },

  plugins: [],
};
