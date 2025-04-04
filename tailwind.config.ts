import type { Config } from "tailwindcss";

export default {
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
        primary: {
          main: "#AE1E5F",
        },
        content: {
          primary: "#0A0A0A",
          secondary: "#6F6F6F",
          tertiary: "#B3B5BB", 
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
