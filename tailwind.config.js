module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      'mobile': {'max': '639px'},
      'tablet': {'min': '640px', 'max': '1149px'},
      'desktop': {'min': '1150px'}
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
