module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
        serif: ["Oswald", "serif"],
        display: ["Sitka", "serif"],
        test: ["Arial", "sans-serif"],
      },
      colors: {
        myRed: "#D02F4A",
        paleText: "#505050",
        lightBlue: "#A0CFD3",
        myBlue: "#ADECF1",
        lightWhite: "#F1F1F1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
