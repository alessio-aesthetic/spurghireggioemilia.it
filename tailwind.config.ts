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
        blacklux: "#F7F4EE",
        ink: "#1D2522",
        gold: "#B68A2A",
        graphite: "#FFFFFF",
        smoke: "#E7E0D4"
      },
      fontFamily: {
        display: ["var(--font-manrope)"],
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
