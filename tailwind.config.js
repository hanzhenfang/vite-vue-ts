// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bottomToTop: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        toastAnimation: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },

      animation: {
        bottomToTop: "bottomToTop 0.5s ",
        toastAnimation: "toastAnimation 1.5s ease-out",
      },

      boxShadow: {
        "add-btn": "0px 6px 16px rgba(204,201,201,1)",
      },

      gridTemplateColumns: {
        5: "repeat(5, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
