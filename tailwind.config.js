/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neo-blue": {
          100: "#E6F0FF",
          200: "#B3D1FF",
          500: "#0066FF",
          600: "#0052CC",
          900: "#00264D",
        },
        "neo-accent": {
          300: "#FFD1B3",
          400: "#FF9966",
          500: "#FF6633",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 15s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        counter: "counter 2s ease-out forwards",
        "gradient-x": "gradient-x 3s ease infinite",
        scroll: "scroll 1.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-20px) translateX(10px)" },
          "50%": { transform: "translateY(10px) translateX(-10px)" },
          "75%": { transform: "translateY(-15px) translateX(15px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        scroll: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [],
};
