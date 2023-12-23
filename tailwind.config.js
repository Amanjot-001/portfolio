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
        primary: '#0f1b61',
        secondary: '#7f00e0'
      },
      fontFamily: {
        consolasBold: ['consolas-bold', 'monospace'],
        bitter: ['bitter', 'sans-serif'],
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