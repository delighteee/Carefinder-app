import * as myTheme from './theme';

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: myTheme.colors,
    },
    fontFamily:{manrope:["Manrope, sans-serif"]},

    container:{
      center:true,
      padding: "1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px",
      }
    }
  },
  plugins: [],
};

