/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Overrides default font family across the app
        sans: ['Geom-Regular'],

        // All your weight/style variants remain available for overrides
        'geom-light': ['Geom-Light'],
        'geom-light-italic': ['Geom-LightItalic'],
        'geom-regular': ['Geom-Regular'],
        'geom-italic': ['Geom-Italic'],
        'geom-medium': ['Geom-Medium'],
        'geom-medium-italic': ['Geom-MediumItalic'],
        'geom-semibold': ['Geom-SemiBold'],
        'geom-semibold-italic': ['Geom-SemiBoldItalic'],
        'geom-bold': ['Geom-Bold'],
        'geom-bold-italic': ['Geom-BoldItalic'],
        'geom-extrabold': ['Geom-ExtraBold'],
        'geom-extrabold-italic': ['Geom-ExtraBoldItalic'],
        'geom-black': ['Geom-Black'],
        'geom-black-italic': ['Geom-BlackItalic'],
      },
    },
  },
  plugins: [],
};
