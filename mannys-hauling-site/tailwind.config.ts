import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E11D2E",
          black: "#050505",
          ink: "#141414",
          soft: "#F6F6F4"
        }
      },
      boxShadow: {
        premium: "0 24px 70px rgba(5, 5, 5, 0.12)",
        red: "0 18px 55px rgba(225, 29, 46, 0.24)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
