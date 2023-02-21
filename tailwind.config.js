/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": "60px",
      },
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
        jetbrains: ["JetBrains Mono", "sans-serif"],
      },
      boxShadow: {
        lg: "0px 4px 60px 4px rgba(0, 0, 0, 0.10)",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: 0,
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
