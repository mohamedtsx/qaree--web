/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      gg: " #0D223E",
      white: "#FFF",
      sd: "#0047",
      xn: "#1a2938",
      xf: "#34495e",
      xff: " #0d1b2a",
      gold: "#ffd700",
      gray: "#212529",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1 rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
};

