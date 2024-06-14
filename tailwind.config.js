/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: { 'mobile': '320px', 'sm': '400px', 'md': '1199px', 'lg': '1200px', 'xl': '1280px', },
    extend: {
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}

