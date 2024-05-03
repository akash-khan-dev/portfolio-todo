/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Roboto", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
