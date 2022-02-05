import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      gray: {
        0: 'FBFBFB',
        200: 'BFBFBF',
        300: 'A9A9A9',
        800: '383838',
      },
      yellow: {
        300: 'FFFE9E',
      },
    },
    extend: {},
  },
  plugins: [],
};
