/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-brand": "#20c6de",
        "red-brand": "#e94560",
        "sub-text": "#6e6e78",
      },
      backgroundImage: {
        "gradient-app": "linear-gradient(158deg, rgba(17, 26, 44, 1) 0%, rgba(27, 37, 55, 1) 50%, rgba(15, 24, 43, 1) 100%)",
      }
    },
  },
  plugins: [],
}
