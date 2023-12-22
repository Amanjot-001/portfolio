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
      },
      fontFamily: {
        consolasBold: ['consolas-bold', 'monospace'],
      }
    },
  },
  plugins: [],
}