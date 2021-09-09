module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter"],
      play: ["Play"],
      open: ["Open Sans"],
    },
    extend: {
      colors: {
        alkali: {
          50: "#f2fcff",
          100: "#e6f8ff",
          200: "#bfeeff",
          300: "#99e3ff",
          400: "#4dcfff",
          500: "#00baff",
          600: "#00a7e6",
          700: "#00a2de",
          800: "#007099",
          900: "#005b7d",
        },
        alkaligrey: {
          200: "#eeeff2",
          300: "#f8f8f8",
          400: "#6b7280",
          500: "#f0f0f0",
          600: "#646464",
          700: "#bcbcbc",
          800: "#111827",
          900: "#918f8f",
        },
        clients: {
          chattr: "#36ad8b",
        },
      },
      margin: {
        100: "30rem",
        "-73": "-19.1rem",
        "-74": "-22.9rem",
        82: "22rem",
      },
      padding: {
        100: "30rem",
        98: "27rem",
        82: "22rem",
      },
      lineHeight: {
        standard: "4.2",
      },
      fontSize: {
        home: "2.5rem",
      },
    },
  },
  variants: {
    extend: {
      overflow: ["hover"],
      height: ["hover"],
      margin: ["hover"],
      width: ["group-hover"],
      display: ["group-hover", "hover"],
      visibility: ["group-hover"],
      translate: ["hover", "group-hover"],
      transform: ["hover", "group-hover"],
    },
  },
  plugins: [],
};

