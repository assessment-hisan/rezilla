/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        popins : ["Poppins"]
      },
      colors :{
        primary :"#3A0CA3",
        secondary : "#4361EE",
        third : "#4CC9F0",
        fourth : "#7209B7",
        fifth : "#F72585",
        offWhite : "#D4D4D4"
      }
    },
  },
  plugins: [],
}

