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
        container: "#EEEEEE",
        primary: "#004277",
        secondary: "#1B96EE",
        third: "#5FF0D5",
        redButton: "#C31D1D"
      },
    },
  },
  plugins: [],
};
export default config;
