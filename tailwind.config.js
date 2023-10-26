/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#111111",
        "body-color": "#272627",
        "accent-color": "#ff7224",
        "text-color": "#F7FAFC"
      },
    },
  },
  plugins: [],
};
  