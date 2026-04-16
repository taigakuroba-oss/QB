import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-white": "#FAF8F6",
        cream: "#F2EDE8",
        "rose-blush": "#E8C4C4",
        "rose-deep": "#C9908F",
        "mauve-light": "#D4C4D4",
        "mauve-mid": "#B09AB0",
        charcoal: "#3D3535",
        "warm-gray": "#9B9494",
        "gold-accent": "#C9A96E",
        "line-green": "#06C755",
      },
      fontFamily: {
        mincho: ["var(--font-shippori)", "serif"],
        sans: ["var(--font-noto)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
