/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#02061E',	/* Main Primary color */
        'secondary': '#060C34',
      }
    },
  },
  variants: {},
  plugins: [],
}