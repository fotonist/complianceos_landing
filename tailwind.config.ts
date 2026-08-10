import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        foreground: "#111827",

        primary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF",
        },

        secondary: {
          DEFAULT: "#0F172A",
          foreground: "#FFFFFF",
        },

        accent: "#7C3AED",
        success: "#10B981",
        warning: "#F59E0B",
        destructive: "#EF4444",
        border: "#E5E7EB",
        muted: "#F1F5F9",
      },

      maxWidth: {
        container: "1280px",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        glow: "0 0 40px rgba(37,99,235,.25)",
      },

      fontFamily: {
        sans: [
          "Geist",
          "Inter",
          "sans-serif",
        ],
      },

      backgroundImage: {
        hero:
          "radial-gradient(circle at top,#2563EB22,transparent 45%)",
      },
    },
  },

  plugins: [],
};

export default config;