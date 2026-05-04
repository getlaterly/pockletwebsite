/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        brand: ['var(--font-brand)', 'serif'],
        ui: ['var(--font-ui-current)', 'sans-serif'],
        'ui-en': ['var(--font-ui-en)', 'sans-serif'],
        'ui-tc': ['var(--font-ui-tc)', 'sans-serif'],
        'ui-sc': ['var(--font-ui-sc)', 'sans-serif'],
        'ui-jp': ['var(--font-ui-jp)', 'sans-serif'],
        display: ['var(--font-heading-current)', 'var(--font-ui-current)', 'serif'],
        sans: ['var(--font-ui-current)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--rose)))',
        'gradient-sage': 'linear-gradient(135deg, hsl(var(--cat-do)), hsl(var(--primary)))',
        'gradient-warm': 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background-warm)) 100%)',
        'gradient-paper': 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background-secondary)) 100%)',
        'gradient-ink': 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 18px rgba(122, 74, 88, 0.08)',
        'phone': '0 20px 60px rgba(122, 74, 88, 0.12)',
        'glow': '0 12px 32px rgba(225, 147, 137, 0.3)',
      },
    },
  },
  plugins: [],
}
