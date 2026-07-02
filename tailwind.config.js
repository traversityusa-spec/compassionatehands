/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#20a1db",
          dark: "#0d2b3e",
          light: "#e8f4fc",
          muted: "#7fc8e8",
        },
        ink: { DEFAULT: "#1a1a2e", soft: "#6b7280" },
        line: "#e5e7eb",
        cream: "#f5f9fc",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: { "2xl": "16px", "3xl": "22px", pill: "100px" },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
