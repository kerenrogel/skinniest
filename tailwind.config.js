module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './config/*.json',
    './assets/*.liquid'
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      }, 
    },
    color: {
      black: '#000000',
    },
  },
  plugins: [],
}; 
