import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF7F2",
        surface: "#FFFFFF",
        ink: "#0F1112",
        "ink-muted": "#525861",
        border: "#E8E2D6",
        brand: "#0B5742",
        "brand-strong": "#073C2E",
        "brand-soft": "#E8F2EE",
        accent: "#C24A1C",
        "accent-soft": "#FBE9DF",
        cta: "#25D366",
        "cta-hover": "#1FB855",
        "cta-ink": "#073914",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        microcopy: ["0.875rem", { lineHeight: "1.5" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        lead: ["1.125rem", { lineHeight: "1.55" }],
        "h3": ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h2": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h1": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1-lg": ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        prose: "640px",
        content: "720px",
        wide: "960px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,17,18,0.04), 0 8px 24px -12px rgba(15,17,18,0.08)",
        lift: "0 2px 4px rgba(15,17,18,0.04), 0 16px 40px -16px rgba(15,17,18,0.14)",
        cta: "0 6px 16px -4px rgba(37,211,102,0.45)",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.4s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
