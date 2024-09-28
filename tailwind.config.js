/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'blue' : '#6E07F3',
        'dark' : 'hsl(216, 19%, 16%);',
        'secDark' :'hsl(217, 10%, 25%);',
        'whitee' : 'hsl(0, 0%, 100%);'
      },
      fontFamily : {
        body: ['Nunito', 'sans-serif'],
        display : ['Montserrat' , 'sans-serif']
      }
    },
    screens: {
      'sm': '412px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [],
}

