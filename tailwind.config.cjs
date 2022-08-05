/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': 'futura-pt, sans-serif',
      'serif': 'classica-pro, serif'
    },
    extend: {
      colors: {
        teal: {
          50: '#00B398'
        }
      },

    },
    plugins: []
  }
};