/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#1F2937", // Dark gray for sidebar
        primary: "#4F46E5", // Indigo for buttons/accents
      }
    },
  },
  plugins: [],
}