/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vitepress/**/*.{js,ts,vue}",
    "./docs/components/**/*.{js,ts,vue}",
    "./docs/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6a5acd",
        secondary: "#1e90ff",
      },
    },
  },
  plugins: [],
};
