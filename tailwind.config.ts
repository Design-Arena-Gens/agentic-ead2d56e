import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f5ff",
          100: "#e7ebff",
          200: "#c9ceff",
          300: "#aab1ff",
          400: "#6e78ff",
          500: "#3240ff",
          600: "#2d3ade",
          700: "#1f29a5",
          800: "#141c72",
          900: "#0b1147"
        },
        neutral: {
          950: "#0b0d17"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        "4xl": "32px"
      },
      boxShadow: {
        glow: "0 40px 80px -40px rgba(50, 64, 255, 0.6)",
        card: "0 25px 50px -24px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      },
      animation: {
        marquee: "marquee 26s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
