/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3490dc",
          dark: "#2779bd",
          light: "#6cb2eb",
          soft: "#cfe8fc",
          alt: "#007acc",
        },
        secondary: {
          DEFAULT: "#38a169",
          dark: "#2f855a",
          light: "#9ae6b4",
          soft: "#d6f5e3",
          alt: "#48bb78",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
