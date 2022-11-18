/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctorsThem: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#323848",
          "base-100": "#FFFFFF",
          "base-200": "#F6F7F9",
          "base-300": "#AFB7CA",
          "base-400": "#8391AD",
          muteText: "#647393",
        },
      },
    ],
  },
};
