/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/js/**/*.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('/images/Background CC.png')",
      }
    },
  },
  plugins: [],
}