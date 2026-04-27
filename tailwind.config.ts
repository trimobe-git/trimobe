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
        bg: "#F8F9FA",
        surface: "#FFFFFF",
        ink: "#202124",
        "ink-muted": "#5F6368",
        "ink-soft": "#3C4043",
        border: "#DADCE0",
        "border-warm": "#E8EAED",
        brand: "#1A73E8",
        "brand-strong": "#1557B0",
        "brand-deep": "#0D2A5C",
        "brand-soft": "#E8F0FE",
        accent: "#EA4335",
        "accent-warm": "#F28B82",
        "accent-soft": "#FCE8E6",
        gold: "#FBBC04",
        "gold-soft": "#FEF7E0",
        "paper-warm": "#F1F3F4",
        "sky-tint": "#E8F0FE",
        success: "#34A853",
        "success-soft": "#E6F4EA",
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
        eyebrow: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.12em" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        lead: ["1.125rem", { lineHeight: "1.55" }],
        "h3": ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h2": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h1": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1-lg": ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-sm": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display": ["5rem", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-lg": ["6rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "numeral": ["12.5rem", { lineHeight: "0.85", letterSpacing: "-0.05em" }],
      },
      maxWidth: {
        prose: "640px",
        content: "720px",
        wide: "960px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(60,64,67,0.06), 0 8px 24px -12px rgba(60,64,67,0.10)",
        lift: "0 2px 4px rgba(60,64,67,0.06), 0 16px 40px -16px rgba(60,64,67,0.16)",
        paper: "0 1px 0 rgba(60,64,67,0.08), 0 24px 48px -24px rgba(60,64,67,0.18)",
        editorial: "0 2px 0 rgba(60,64,67,0.06), 0 32px 80px -32px rgba(26,115,232,0.25)",
        cta: "0 6px 16px -4px rgba(37,211,102,0.45)",
        "cta-glow": "0 8px 24px -6px rgba(37,211,102,0.55), 0 0 0 4px rgba(37,211,102,0.12)",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "float-slow": "floatSlow 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
