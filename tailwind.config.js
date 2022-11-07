/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffdb00",
      },
      boxShadow: {
        "3xl": "0 5px 20px  rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
