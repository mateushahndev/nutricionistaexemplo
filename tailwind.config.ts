/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cream: {
          DEFAULT: "#f3f0e6",
          light: "#faf8f2",
          dark: "#eceadd",
        },
        green: {
          DEFAULT: "#1b3327",
          light: "#2a4a38",
          dark: "#132419",
        },
        sage: {
          DEFAULT: "#3f6b4f",
          light: "#e7efe5",
          dark: "#2e503a",
        },
        coral: {
          DEFAULT: "#f3a6a0",
          dark: "#e07f77",
        },
        lavender: {
          DEFAULT: "#7a72e0",
          light: "#9a93e8",
        },
        ink: {
          DEFAULT: "#22281f",
          soft: "#5c6459",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)'],
        sans: ['var(--font-jakarta)'],
      },
      borderRadius: {
        lg: "32px",
        md: "20px",
        sm: "14px",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 5s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}