import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: '#25f4f4',
          dark: '#1ba8a8',
          glow: 'rgba(37, 244, 244, 0.3)',
        },
        dark: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1f1f1f',
        },
        charcoal: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#2a2a2a'
        },
        primary: "#00f2ff",
        "background-light": "#f8f6f6",
        "background-dark": "#050a0a",
        "neutral-dark": "#1a1f1f",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ["var(--font-public-sans)", "sans-serif"]
      },
      borderRadius: {
        'custom': '8px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 1s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
