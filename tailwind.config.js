/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#878787",
        blue: "#3B82F6",
        red: "#F43F5E",
        orange: "#F97316",
        black: "#14191F",
        "bg-light": "#212934",
        "bg-dark": "#121824",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 60px 4px rgba(0, 0, 0, 0.10)",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
    container: {
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [],
};
