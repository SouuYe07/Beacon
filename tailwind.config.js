/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Mention all files where you write NativeWind class names
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
