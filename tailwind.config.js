 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
    container: {
      center :true,
      /*padding: {
        DEFAULT: "12px",
        md: "32px"
      }*/
    }
  },
  plugins: [],
}

