import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        100: "#CDCDCD",
        200: "#E9E9E9",
      },
      primary: {
        100: "#F05022",
        200: "#8A361D",
      },
      secondary: "#1B1A1A",
      terciary: "#F1F6FA",
      blue: "#0088D1",
      green: "#33691D",
      purple: "#7D57C2",
    },
    extend: {
      fontFamily: {
        anton: ["var(--font-anton)"],
        roboto: ["var(--font-roboto)"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
