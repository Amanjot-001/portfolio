/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#f4f9fc',
        bgMenu: '#aadcec',
        bgAbout: '#f7f8f9',
        primary: '#0f1b61',
        secondary: '#7f00e0',
        about: '#1c494c'
      },
      fontFamily: {
        consolasBold: ['consolas-bold', 'monospace'],
        bitter: ['bitter', 'sans-serif'],
        samarkan: ['samarkan', 'sans-serif'],
        mono: ['monospace', 'sans-serif'],
        default: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'stripe-pattern': "url('./src/assets/images/bg.svg')",
      }
    },
  },
  plugins: [],
}
