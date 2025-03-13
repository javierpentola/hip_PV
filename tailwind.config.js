/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "noto-sans-jp": ["var(--font-noto-sans-jp)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFD700", // Amarillo
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#FF6347", // Rojo/naranja
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#000000",
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: { transform: "translateX(-50px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        fadeInUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
}

