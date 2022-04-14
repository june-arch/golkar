module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        golkar: "url('/bg-golkar-with-foto.png')",
        'golkar-grey': "url('/bg-golkar-grey.png')",
        'golkar-video' : "url(/bg-golkar-video.png)",
        'footer' : "url(/footer.png)"
      }),
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
