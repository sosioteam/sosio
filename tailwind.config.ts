import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        phone: "url('../public/sosioimg/phone.webp')",
        phoneScreen: "url('../public/sosioimg/dream.webp')",
        colorFullDiv: "url('../public/sosioimg/color-full-div.webp')",
      },
      translate: {
        "-321.09": "-321.09px",
      },
      willChange: {
        transform: "transform",
      },
      height: {
        "450px": "450px",
        "89p3": "89.3%",
      },
      width: {
        "500px": "500px",
        "24p": "24%",
      },
      zIndex: {
        "1": "1",
        "2": "2",
      },
      animation: {
        "scroll-up-down": "scrollUpDown 3s linear infinite",
      },
      keyframes: {
        scrollUpDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
