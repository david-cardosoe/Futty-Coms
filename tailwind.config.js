/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mlsColor: '#E22319',
        plColor: '#38003c',
        laligaColor: '#A50044',
        ligamxColor: '#C1D82F',
        premTextColor: '#00ff85',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
