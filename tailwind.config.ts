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
          navy: "#0a1420",     // base casi negra, tipo el logo
          blue: "#1d4ed8",     // azul del logo
          // "green" se remapea al ROJO del logo para reutilizar todas las clases existentes
          green: "#dc2626",    // rojo principal (acento/CTA)
          greenDark: "#b91c1c",
          red: "#dc2626",
          yellow: "#fbbc05",
        },
      },
    },
  },
  plugins: [],
};
export default config;
