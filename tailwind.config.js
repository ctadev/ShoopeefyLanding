/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        gridLayoutColumn: "repeat(4, 300px)",
      },
      gridAutoRows: {
        autoRow300: "300px",
      },
    },
  },
  plugins: [],
};
