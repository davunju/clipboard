/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        bai: '"Bai Jamjuree", sans-serif',
      },
      backgroundImage: {
        "header-desktop": "url('/images/bg-header-desktop.png')",
        "header-mobile": "url('/images/bg-header-mobile.png')",
      },
      screens: {
        tablet: { max: "920px" },
        mobile: { max: "795px" },
      },
    },
  },
  plugins: [],
};
