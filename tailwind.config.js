/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      handwriting: ["Caveat"],
      headline: ["Poppins"],
    },
    extend: {
      colors: {
        brand: {
          950: "#0A1D33",
          800: "#002F67",
          400: "#5289CC",
          200: "#99C7FF",
          100: "#CCE3FF",
        },
      },
    },
  },
  plugins: [],
}
