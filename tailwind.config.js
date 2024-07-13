/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins",
      },
      colors: {
        "primary": "#8C71F7",
        "secondary": "#F7FAFC",
        "tertiary": "#E5E7EB",
        "quaternary": "#9CA3AF",
        "quinary": "#D1D5DB",
        "senary": "#F3F4F6",
      },
      keyframes: {
        slideToL: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideToR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
}