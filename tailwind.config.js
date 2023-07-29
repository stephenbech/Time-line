/** @type {import('tailwindcss').Config} */
module.exports = {
  node:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  media: true,
  theme: {
    extend: {},
  },
  variant: {
    extends:{},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
