/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        multiplayerDark: "#F56159",
        multiplayerLight: "#F87D76",
        singlePlayerDark: "#9C59F5",
        singlePlayerLight: "#B776F8",
        miscDark: "#47B93E",
        miscLight: "#61D259",
        light: "#F1f1f1",
      },
      fontFamily: {
        default: ["Archivo", "sans-serif"],
      },
      textColor: {
        default: "#F1f1f1",
      },
    },
    screens: {
      "phone-sm": "375px",
      // => @media (min-width: 375px) { ... }

      "phone-md": "390px",
      // => @media (min-width: 390px) { ... }

      "phone-lg": "414px",
      // => @media (min-width: 414px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
    },
  },
  plugins: [],
};
