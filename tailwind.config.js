/** @type {import('tailwindcss').Config} */
const fs = require("fs");
const path = require("path");
const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "tw-",
  content: [
    // "./src/**/*.{html,vue}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // 'primary' : {
        //   DEFAULT: '#000000'
        // },
        // 'sc-big-red' : {
        //   DEFAULT: '#ff0000'
        // }, //tw-text-sc-big-red //tw-bg-sc-big-red
      },
      fontFamily: {
        sans: [],
        serif: [],
      },
      fontSize: {
        // 'sc-h1': [ 
        //   '64px', // font size, can use px, rem
        //   {
        //     lineHeight: '80px',
        //     letterSpacing: '-3px',
        //     fontWeight: '700,'
        //   }
        // ] //tw-text-sc-h1
      },
    },
  },
  plugins: [],
};
