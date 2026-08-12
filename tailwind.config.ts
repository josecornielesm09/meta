import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  safelist: [
    { pattern: /(from|to)-(blue|violet|indigo|cyan|sky|green|emerald|rose|red|amber|orange|yellow|fuchsia|purple|teal|slate)-(400|500|600)/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          navy: "#0b1f3a",
          blue: "#1a73e8",
          green: "#16a34a",
          greenDark: "#15803d",
          red: "#ea4335",
          yellow: "#fbbc05",
        },
      },
    },
  },
  plugins: [],
};
export default config;
