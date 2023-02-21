/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#646970",
        blue: "#3B82F6",
        "blue-dark": "#121824",
        "blue-light": "#212934",
        red: "#F43F5E",
        orange: "#F97316",
        black: "#14191F",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
