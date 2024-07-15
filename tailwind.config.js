/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '640px', // default
        'md': '768px', // default
        'lg': '1024px', // default
        'xl': '1280px', // default
        '2xl': '1536px', // default
        'rv': '910px', // custom breakpoint
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}