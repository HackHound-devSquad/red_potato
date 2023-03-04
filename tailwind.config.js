/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#6C00FF",
        secondary: "#FF00FF",
        "primary-light": "#A600FF",
        "secondary-light": "#FF00FF",
        "primary-dark": "#3C00FF",
        "secondary-dark": "#110033",
        "primary-lighter": "#D600FF",
        "secondary-lighter": "#FF00FF",
        "primary-darker": "#0000FF",
        "secondary-darker": "#FF00FF",
      }
    },
  },
  plugins: [],
};
