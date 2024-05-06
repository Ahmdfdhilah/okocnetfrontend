/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: { 'mobile': '320px', 'sm': '400px', 'md': '1199px', 'lg': '1200px', 'xl': '1280px', },
    extend: {},
  },
  plugins: [],
}

