/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      h1: "36px",
      h2: "32px",
      h3: "24px",
      h4: "20px",
      h5: "16px",
      h6: "14px",
    },
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
        border_dark: "#cac6da",
        light_grey: "#f9f9f9",
      },
      boxShadow: {
        "3xl": "0 5px 20px  rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
