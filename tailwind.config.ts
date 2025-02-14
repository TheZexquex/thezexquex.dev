/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
        baloo: ['Baloo Bhaijaan 2', ...defaultTheme.fontFamily.sans],
        vollkornsc: "Vollkorn SC, serif",
        noto: "Noto Serif, serif",
        inter: "Inter, sans",
      },
      colors: {
        'text-primary': '#3f364a',
        'background': '#3f364a'
      }
    },
  },
  plugins: [],
}

