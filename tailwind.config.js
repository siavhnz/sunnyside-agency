/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        "soft-yellow": "hsl(51, 100%, 49%)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "light-blue": "rgb(134, 204, 250)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)", //graphic design text
        "dark-blue": "hsl(198, 62%, 26%)", //photography text
        "dark-moderate-cyan": "hsl(168, 34%, 41%)", //footer
      },
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
