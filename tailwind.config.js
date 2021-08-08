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
        bgText: "#6B6B6B",
        Pink: {
          DEFAULT: "rgba(243, 25, 65, 0.79)",
        },
        Purple: {
          DEFAULT: "rgba(184, 103, 181, 1)",
        },
        greyBG: "#F5F5F5",
      },
      zIndex: {
        "-3": "-3",
        "-2": "-2",
        "-1": "-1",
      },
      letterSpacing: {
        veryWide: "0.2em",
      },
      backgroundImage: (theme) => ({
        "home-back": 'url("./images/main.jpg")',
      }),
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "15rem",
        "13xl": "18rem",
        "14xl": "21rem",
      },
      margin: {
        102: "32rem",
        101: "30rem",
        100: "28rem",
        98: "26rem",
        "-90": "-21rem",
        "-92": "-23rem",
        "-98": "-26rem",
        "-100": "-30rem",
        "-1005": "-32rem",
        "-101": "-34rem",
        "-102": "-36rem",
        "-103": "-38rem",
        "-104": "-40rem",
        "-105": "-44rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
