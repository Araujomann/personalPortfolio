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

      keyframes: {},
      animation: {},
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // Maintaining aliases mapped to Inter for backward compatibility during migration
        serif: ["Inter", "sans-serif"],
        roboto: ["Inter", "sans-serif"],
        bebas: ["Inter", "sans-serif"],
        anton: ["Inter", "sans-serif"],
        fjalla: ["Inter", "sans-serif"],
        silks: ["Inter", "sans-serif"],
        satisfy: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#F9FAFB", // light gray neutral
        foreground: "#111827", // almost black
        primary: "#0B6353",
        bege: "#EAE6DC",
        greenTitle: "#0B6353",
        blueImageProject: "#0250c5",
        yellowJs: "#f0db4f",
        blueSubmit: "#007BFF",
      },
      height: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        272: "68rem",
        288: "72rem",
        304: "76rem",
        320: "80rem",
        336: "84rem",
        352: "88rem",
        368: "92rem",
        384: "96rem",
        400: "100rem",
      },
    },
    plugins: [],
  },
};
