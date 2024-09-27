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
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: '#E67E22',
        green1: '#C3D3C2',
        green2: '#0F827E',
        green3: '#085653',
        green4: '#2F5A3E',
      },
    },
  },
  plugins: [],
};
export default config;
