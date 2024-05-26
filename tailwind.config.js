/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      yellowTail: ["Yellowtail", "cursive"],
    },
    extend: {
      colors: {
        navyCs: "#274C5B",
        greenCs: "#7EB693",
        lightGreenCs: "#EFF6F1",
        orangeCs: "#EFD372",
        grayCs: "#D4D4D4",
        lightGrayCs: "#F9F8F8",
        darkGray: "#525C60",
      },
    },
  },
  plugins: [],
};
