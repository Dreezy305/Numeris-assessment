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
        NumerisGrey3: "#666F77",
        NumerisGreyBorder: "#E3E6EF",
        NumerisBadgeSuccess: "#12904333",
        NumerisTextSuccess: "#129043",
        NumerisGreenLight: "#E6FFF0",
        NumerisOverDue: "#FF566333",
        NumerisOverDueBg: "#FFF4F5",
        NumerisOverDueText: "#FF5663",
        NumerisDarkBorder: "#373B4733",
        NumerisPending: "#D98F00",
        NumerisPendingBg: "#FFF8EB",
        NumerisPendingBorder: "#D98F0033",
        NumerisPryBorder: "#003EFF33",
        NumerisPryBg: "#F2FBFF",
        NumerisPink: "#FCDDEC",
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
