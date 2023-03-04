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
      colors: {
        mPrimary: "#e39431",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
