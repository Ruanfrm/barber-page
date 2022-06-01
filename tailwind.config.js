module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      'mobile': {'max': '639px'},
      'sm': '640px'
    },
    extend: {
      colors: {
        brand: {
          100: '#f1cd30',
          300: '#996dff',
          500: '#8257e5',
        }
      },
      borderRadius: {
        md: '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
