/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgDesktopDark: "url('../public/images/bg-desktop-dark.jpg')",
        bgDesktopLight: "url('../public/images/bg-desktop-light.jpg')",
        bgMobileLight: "url('../public/images/bg-mobile-light.jpg')",
        bgMobileDark: "url('../public/images/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
