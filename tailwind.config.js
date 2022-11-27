/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
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
