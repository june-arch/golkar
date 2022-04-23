const { height } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        golkar: "url('/bg-golkar-with-foto.png')",
        'golkar-grey': "url('/bg-golkar-grey.png')",
        'golkar-video' : "url(/bg-golkar-video.png)",
        'footer' : "url(/footer.png)"
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      }
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    screens: {
      'xs': '440px',
      ...defaultTheme.screens,
    },
    // ...
    groupLevel: 10,
    // will result in as many direct child selectors as defined here
    groupScope: "scope",
    // will result in group-scope being available in addition to the base group
    groupVariants: ["hover", "focus","last"],
    // will result in group-scope:hover and group-scope:focus variants
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-nested-groups'),
  ],
}
