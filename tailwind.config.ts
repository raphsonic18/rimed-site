import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F2D52",       // navy profond — titres, header
        rimed: "#1D5A96",     // bleu primaire (issu du logo)
        rimedLight: "#3E7FBF",// bleu clair — dégradés, survols
        signal: "#E8452F",    // rouge/corail du point du logo — accent rare
        bg: "#F6F9FC",        // fond clinique froid
        line: "#DCE6EE",      // bordures / séparateurs
        slate: {
          DEFAULT: "#4A5568",
          dark: "#26313F",
        },
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "trace-grid":
          "linear-gradient(rgba(15,45,82,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,45,82,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-line": {
          "0%, 100%": { strokeDashoffset: "0" },
          "50%": { strokeDashoffset: "40" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 3.2s ease-in-out infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
