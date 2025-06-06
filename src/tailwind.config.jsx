/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-[hsl(var(--background))]',
    'text-[hsl(var(--foreground))]',
    'text-[hsl(var(--secondary-foreground))]',
    'bg-[hsl(var(--card))]',
    'shadow-[var(--color-card-shadow)]',
    'border-[hsl(var(--border))]',
    'bg-[hsl(var(--primary))]',
    'text-[hsl(var(--primary-foreground))]',
    'bg-gradient-to-r',
    'from-[hsl(var(--primary))]',
    'to-[hsl(280_80%_75%)]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}