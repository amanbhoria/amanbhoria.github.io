/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        monokai: {
          background: "#272822",
          foreground: "#F8F8F2",
          comment: "#75715E",
          highlight: "#49483E",
          // Monokai accent colors
          pink: "#F92672",
          green: "#A6E22E",
          orange: "#FD971F",
          cyan: "#66D9EF",
          yellow: "#E6DB74",
          // etc. if you'd like more
        },
      },
    },
  },
  plugins: [],
};
