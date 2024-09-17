import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "slide-in-up": {
          "0%": { transform: "translateY(2rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in-up": ".5s both slide-in-up cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "green-pretty":
          "radial-gradient(circle farthest-side at center top, #84CC16, ease-in-out, #22C55E)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        "t-pretty": "50% 50% 0% 0% / 25% 25% 0% 0%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
