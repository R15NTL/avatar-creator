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
        singlePlayer950: "#100918",
        singlePlayer900: "#1f1231",
        singlePlayer850: "#2f1b49",
        singlePlayer800: "#3e2462",
        singlePlayer750: "#4e2d7b",
        singlePlayer700: "#5e3593",
        singlePlayer650: "#6d3eac",
        singlePlayer600: "#7d47c4",
        singlePlayer550: "#8c50dd",
        singlePlayer500: "#9C59F5",
        singlePlayer450: "#a66af6",
        singlePlayer400: "#b07af7",
        singlePlayer350: "#ba8bf8",
        singlePlayer300: "#ba8bf8",
        singlePlayer250: "#c49bf9",
        singlePlayer200: "#ceacfa",
        singlePlayer150: "#ceacfa",
        singlePlayer100: "#d7bdfb",
        singlePlayer50: "#e1cdfc",
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

      "phone-xl": "512px",
      // => @media (min-width: 512px) { ... }

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
