/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        'extra-light': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semi-bold': 600,
        'bold': 700,
        'extra-bold': 800,
        'black': 900,
      },
      colors: {
        customColor: '#152536', // Añade colores personalizados aquí
      },

    },
  },
  plugins: [],
}

