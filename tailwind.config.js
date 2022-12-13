const defaultTheme = require('tailwindcss/defaultTheme')

// https://leonardocolor.io/theme.html?name=Kerning+Code+2.0&config=%7B%22baseScale%22%3A%22Cool+gray%22%2C%22colorScales%22%3A%5B%7B%22name%22%3A%22Cool+gray%22%2C%22colorKeys%22%3A%5B%22%232c3639%22%2C%22%233f494f%22%5D%2C%22colorspace%22%3A%22RGB%22%2C%22ratios%22%3A%5B%221.1%22%2C%221.45%22%2C%221.96%22%2C%222.71%22%2C%223.84%22%2C%225.57%22%2C%228.19%22%2C%2211.9%22%2C%2216.1%22%2C%2219.91%22%5D%2C%22smooth%22%3Afalse%7D%2C%7B%22name%22%3A%22Faded+brass%22%2C%22colorKeys%22%3A%5B%22%23a27b4c%22%2C%22%23dcd7c9%22%5D%2C%22colorspace%22%3A%22RGB%22%2C%22ratios%22%3A%5B%221.1%22%2C%221.45%22%2C%221.96%22%2C%222.71%22%2C%223.84%22%2C%225.57%22%2C%228.19%22%2C%2211.9%22%2C%2216.1%22%2C%2219.91%22%5D%2C%22smooth%22%3Afalse%7D%5D%2C%22lightness%22%3A100%2C%22contrast%22%3A1%2C%22saturation%22%3A100%2C%22formula%22%3A%22wcag2%22%7D
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
      colors: {
        'cool-gray': {
          100: '#f3f4f4',
          200: '#d4d6d7',
          300: '#b6babc',
          400: '#989ea0',
          500: '#7c8387',
          600: '#60696e',
          700: '#465155',
          800: '#2d383c',
          900: '#1b2224',
          1000: '#08090a',
        },
        'faded-brass': {
          100: '#f5f3ef',
          200: '#dbd6c7',
          300: '#c7b79c',
          400: '#b49974',
          500: '#a17b4c',
          600: '#81623c',
          700: '#624b2e',
          800: '#453420',
          900: '#291f13',
          1000: '#0b0805',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
