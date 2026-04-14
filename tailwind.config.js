/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050506',
        foreground: '#e4e4e7',
        primary: {
          DEFAULT: '#7c5d7c',
          dark: '#4a384a',
          light: '#9d7c9d',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          soft: 'rgba(139, 92, 246, 0.15)',
          glow: 'rgba(139, 92, 246, 0.4)',
        },
        card: {
          DEFAULT: 'rgba(20, 20, 22, 0.8)',
          border: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
