/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'smoke': 'rgba(255, 255, 255, 0.774)',
        'grey-shark': '#333333',
        'grey-shark-light': '#666666',
        'bkg-blue': 'rgb(48,36,142)',
        'bkg-two': '#7e8287',
        'bkg-white': '#efeeee',
        'bkg-yellow-light': 'rgb(234, 181, 65)',
        'yellow': '#FEFF99',
        'light-yellow': 'rgba(209, 198, 39, 0.541)'
      },
      fontFamily: {
        'average': ['Average Sans', 'sans-serif'],
        'reem': ['Reem Kufi', 'sans-serif']
      },
    },
  },
  plugins: [],
}