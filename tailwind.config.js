export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        bgSoft: "#111111",
        bgCard: "#1A1A1A",
        primary: "#34D399",
        primaryGlow: "#6EE7B7",
        accent: "#22D3EE",
        textMain: "#F3F4F6",
        textDim: "#9CA3AF",
        textMuted: "#6B7280",
        borderSoft: "rgba(255,255,255,0.08)",
        borderMedium: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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