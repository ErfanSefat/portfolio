import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'card-background': 'rgba(0,0,0,0.5)',
        'card-background2': 'rgba(0,0,0,0.1)',
        'white-1': 'rgba(255, 255, 255, 0.4)',
        'white-2': 'rgba(255, 255, 255, 0.1)',
        'white-3': 'rgba(255, 255, 255, 0.2)',
        'white-4': 'rgba(255, 255, 255, 0.05)',
      },
      dropShadow:{
        'rich1': '0 5px 8px rgba(0, 0, 0, 0.3)',
        'rich2': '0 5px 5px rgba(0, 0, 0, 0.5)',
        'rich3': '0 10px 8px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
};
export default config;
