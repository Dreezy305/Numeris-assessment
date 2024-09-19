/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "992px",
      lg: "1200px",
      xl: "1500px",
    },
    extend: {
      colors: {
        NumerisBlue: "#003EFF",
        NumerisGrey: "#697598",
        NumerisDarkGrey: "#373B47",
      },
    },
    fontFamily: {
      NeueHaasDisplayBlack: "NeueHaasDisplayBlack",
      NeueHaasDisplayBold: "NeueHaasDisplayBold",
      NeueHaasDisplayLight: "NeueHaasDisplayLight",
      NeueHaasDisplayMedium: "NeueHaasDisplayMedium",
      NeueHaasDisplayThin: "NeueHaasDisplayThin",
      NeueHaasDisplayXThin: "NeueHaasDisplayXThin",
      NeueHaasDisplayRoman: "NeueHaasDisplayRoman",
    },
  },
  plugins: [],
};
