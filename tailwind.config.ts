import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
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
  plugins: [ 
    require('flowbite/plugin'),
  ],
};
export default config;