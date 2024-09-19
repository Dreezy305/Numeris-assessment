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
        NumerisDark: "#1F1F23",
        NumerisGreen: "#B6FDD3",
        NumerisDanger: "#FFB7BD",
        NumerisAsh: "#D9D9E0",
        NumerisYellow: "#F8E39B",
        NumerisLightGrey: "#F6F8FA",
        NumerisGreyBorder: "#E3E6EF",
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
