import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blacklux: "#0A0A0A",
        ink: "#EDEDED",
        gold: "#D4AF37",
        graphite: "#111111",
        smoke: "#1A1A1A"
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"]
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
