/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue-clr": "hsl(var(--very-dark-blue-clr))",
        "soft-red-clr": "hsl(var(--soft-red-clr))",
        "soft-violet-clr": "hsl(var(--soft-violet-clr))",
        "soft-blue-clr": "hsl(var(--soft-blue-clr))",
        "very-dark-grayish-blue-clr": "hsl(var(--very-dark-grayish-blue-clr))",
        "dark-grayish-blue-clr": "hsl(var(--dark-grayish-blue-clr))",
        "light-grayish-blue-clr": "hsl(var(--light-grayish-blue-clr))",
      },
      fontFamily: {
        "kumb-sans": ["Kumbh Sans", "sans-serif"],
      },
      // backgroundImage: {
      //   "pattern-mobile": "url('/src/assets/bg-pattern-mobile.svg')",
      //   "pattern-desktop": "url('/src/assets/bg-pattern-desktop.svg')",
      // },
    },
  },
  plugins: [],
};

// --very-dark-blue-clr: 238, 29%, 16%;
//     --soft-red-clr: 14, 88%, 65%;
// --soft-violet-clr: 273, 75%, 66%;
// --soft-blue-clr: 240, 73%, 65%;
// --very-dark-grayish-blue-clr: 237, 12%, 33%;
// --dark-grayish-blue-clr: 240, 6%, 50%;
// --light-grayish-blue-clr: 240, 5%, 91%;
