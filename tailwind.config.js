/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Adjust paths as needed
  theme: {
    extend: {
      screens: {
        xs: "230px",
        sm: "300px",
        md: "768px", // Small laptop and up
        lg: "1024px", // Larger laptops
      },
    },
  },
  plugins: [],
};
