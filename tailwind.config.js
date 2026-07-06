/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08090B",
          soft: "#0C0E11",
        },
        graphite: {
          900: "#101216",
          800: "#15171C",
          700: "#1C1F26",
          600: "#262A33",
          500: "#333843",
        },
        silver: {
          500: "#7A818C",
          400: "#9AA1AB",
          300: "#C3C8D0",
          200: "#E2E5E9",
        },
        paper: "#F4F5F7",
        signal: {
          DEFAULT: "#2E6FEE",
          400: "#5B8CF5",
          300: "#8FB0F8",
          glow: "#5ED0F2",
        },
      },
      fontFamily: {
        display: ["'Archivo'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "22px 22px",
        grid: "48px 48px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 24px 48px -24px rgba(0,0,0,0.9)",
        "card-hover":
          "0 1px 0 0 rgba(255,255,255,0.09) inset, 0 32px 64px -28px rgba(0,0,0,0.95), 0 0 44px -14px rgba(46,111,238,0.28)",
        glow: "0 0 0 1px rgba(46,111,238,0.35), 0 18px 50px -20px rgba(46,111,238,0.35)",
        cta: "0 14px 30px -12px rgba(0,0,0,0.7)",
        "input-focus": "0 0 0 3px rgba(46,111,238,0.16)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};
