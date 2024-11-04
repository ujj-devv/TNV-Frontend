/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'custom-green1': '#32736A',
        'custom-green2': '#6CA399',
        'custom-green3': '#B2DDD3',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(108.89deg, #32736A 4.94%, #32736A 22.81%, #6CA399 63.73%, #B2DDD3 96.12%)',
      },
      boxShadow: {
        'custom-light': '4px 4px 4px 0px #F3FAF840',
      },
    },
  },
  plugins: [],
}