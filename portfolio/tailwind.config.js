/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xl+": "1400px",
        "3xl": "1900px",
      },
      width: {
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
      },
      height: {
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "11rem",
      },
      backgroundImage: {
        "conic-gradient":
          "conic-gradient(from 0deg at 50% 50%, red, yellow, green, blue, red)",
        "gradient-to-t": "linear-gradient(to top, #EAE6DC , #EAE6DC)",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        typingBounce: {
          "0%, 60%, to": { opacity: "0.4", transform: "translateY(0)" },
          "30%": { opacity: "1", transform: "translateY(-3px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typingBounce: "typingBounce 1s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      colors: {
        background: "#050505",
        foreground: "#e5e5e5",
        primary: "#00a85a",
        surface: "#111",
        "surface-2": "#161616",
        border: "#2e2e2e",
        "border-strong": "#2a2a2a",
        accent: "#00a85a",
        "accent-dim": "#00a85a1f",
        "accent-glow": "#00a85a4d",
        "on-accent": "#001a0e",
        text: "#e5e5e5",
        "text-dim": "#6b6b6b",
        "text-faint": "#4a4a4a",
        "text-bright": "#fff",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        card: "0 1px 0 rgb(255 255 255 / 0.05) inset",
      },
      dropShadow: {
        glow: "0 0 10px rgb(0 168 90 / 0.3)",
      },
      spacing: {
        "dot": "6px",
      },
    },
  },
  plugins: [],
};