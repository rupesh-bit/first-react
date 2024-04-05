/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        'cus': '80vh', // Define custom height here
      },
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
}

