import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'faded-white': '0 0 20px 10px rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 1%, rgba(255,255,255,0) 70%)',
      },
    },
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;
