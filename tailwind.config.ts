import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Playfair': ['Playfair Display']
      },
      colors:{
        'background': 'rgb(22, 22, 22)',
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
        'rich4': '0 10px 20px rgba(0, 0, 0, 0.8)',
        'rich5': '0 5px 20px rgba(0, 0, 0, 1)',
        'bottomtotop':'0 -40px 30px rgba(0, 0, 0, 1)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow2': 'spin 40s linear infinite',
        'spin-slow3': 'spin 60s linear infinite',
        'reverse-spin': 'reverse-spin 60s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
    
  },
  plugins: [],
};
export default config;
