export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        bgSoft: "rgb(var(--color-bg-soft) / <alpha-value>)",
        bgCard: "rgb(var(--color-bg-card) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        primaryGlow: "rgb(var(--color-primary-glow) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        textMain: "rgb(var(--color-text-main) / <alpha-value>)",
        textDim: "rgb(var(--color-text-dim) / <alpha-value>)",
        textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",
        borderSoft: "rgb(var(--color-border) / 0.08)",
        borderMedium: "rgb(var(--color-border) / 0.12)",
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
