/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050510",
        deepNavy: "#0B1020",
        electricBlue: "#287BFF",
        neonCyan: "#00E5FF",
        royalPurple: "#7955FF",
        violetAccent: "#A855F7",
        silverWhite: "#E8EDF7",
        accentOrange: "#FF8A36",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.4), 0 0 10px -2px rgba(0, 229, 255, 0.2)',
        'glow-blue': '0 0 25px -5px rgba(40, 123, 255, 0.4), 0 0 10px -2px rgba(40, 123, 255, 0.2)',
        'glow-purple': '0 0 25px -5px rgba(121, 85, 255, 0.4), 0 0 10px -2px rgba(121, 85, 255, 0.2)',
        'glow-orange': '0 0 25px -5px rgba(255, 138, 54, 0.4), 0 0 10px -2px rgba(255, 138, 54, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
