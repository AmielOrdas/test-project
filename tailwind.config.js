/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // prettier-ignore
        'm2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
        // prettier-ignore
        'mxl': {'max': '1299px'},
        // => @media (max-width: 1279px) { ... }
        // prettier-ignore
        'mlg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        // prettier-ignore
        'mmd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        // prettier-ignore
        'msm': {'max': '320'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
