/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#fbf8cc",
        "dark-blue": "#03045e",
        "dark-brown": "#474306",
        yellow: "#f5ee84",
        "too-light-yellow": "#f7f197",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      "81xl": "100px",
      "5xl": "24px",
      mini: "15px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
