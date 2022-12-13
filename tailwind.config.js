const defaultTheme = require('tailwindcss/defaultTheme')

// https://leonardocolor.io/theme.html?name=Kerning+Code+Podcast&config=%7B%22baseScale%22%3A%22Cool+gray%22%2C%22colorScales%22%3A%5B%7B%22name%22%3A%22Cool+gray%22%2C%22colorKeys%22%3A%5B%22%23222831%22%2C%22%23393e46%22%5D%2C%22colorspace%22%3A%22HSL%22%2C%22ratios%22%3A%5B%221.45%22%2C%221.9%22%2C%222.52%22%2C%223.41%22%2C%224.67%22%2C%226.58%22%2C%229.29%22%2C%2212.82%22%2C%2216.48%22%2C%2219.91%22%5D%2C%22smooth%22%3Atrue%7D%2C%7B%22name%22%3A%22Mellow+yellow%22%2C%22colorKeys%22%3A%5B%22%23ffd369%22%2C%22%23eeeeee%22%5D%2C%22colorspace%22%3A%22RGB%22%2C%22ratios%22%3A%5B%221.45%22%2C%221.9%22%2C%222.52%22%2C%223.41%22%2C%224.67%22%2C%226.58%22%2C%229.29%22%2C%2212.82%22%2C%2216.48%22%2C%2219.91%22%5D%2C%22smooth%22%3Afalse%7D%5D%2C%22lightness%22%3A100%2C%22contrast%22%3A1%2C%22saturation%22%3A100%2C%22formula%22%3A%22wcag2%22%7D
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
          100: '#d6d6d7',
          200: '#babcbe',
          300: '#a0a3a8',
          400: '#858b93',
          500: '#6d757d',
          600: '#565e66',
          700: '#41474f',
          800: '#2d3239',
          900: '#1b1f25',
          1000: '#090909',
        },
        'mellow-yellow': {
          100: '#fbd167',
          200: '#ddb85b',
          300: '#bf9f4e',
          400: '#a38843',
          500: '#897138',
          600: '#6d5b2d',
          700: '#544522',
          800: '#3b3118',
          900: '#251e0f',
          1000: '#0a0904',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
