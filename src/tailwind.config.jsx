/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Asegurar que las clases 'light' y 'dark' se mantengan en el <html>
    'light',
    'dark',

    // Patrones para clases que usan hsl(var(--...))
    // Tailwind puede tener problemas para detectar clases generadas dinámicamente.
    // Usamos patrones más amplios para asegurarnos de que se incluyan.
    {
      pattern: /bg-\[hsl\(var\(--[a-z-]+\)\)\]/, // Para bg-[hsl(var(--background))], bg-[hsl(var(--card))]
      variants: ['hover'], // Si usas hover en estas clases dinámicas
    },
    {
      pattern: /text-\[hsl\(var\(--[a-z-]+\)\)\]/, // Para text-[hsl(var(--foreground))], text-[hsl(var(--secondary-foreground))]
      variants: ['hover'],
    },
    {
      pattern: /border-\[hsl\(var\(--[a-z-]+\)\)\]/, // Para border-[hsl(var(--border))]
    },
    {
      pattern: /shadow-\[var\(--[a-z-]+\)\]/, // Para shadow-[var(--color-card-shadow)]
    },

    // Asegurar que las clases de gradientes se mantengan
    'bg-gradient-to-r',
    'from-[hsl(var(--primary))]',
    'to-[hsl(280_80%_75%)]',
    // Si usas otras direcciones o stops en gradientes:
    // 'to-[hsl(var(--border))]', // Si lo usas en ThemeToggle
    // 'from-[hsl(var(--background))]', // Si lo usas en ThemeToggle

    // Clases explícitas que son cruciales y no están en patrones dinámicos
    'bg-primary',
    'text-primary-foreground',
    'text-primary',
    'text-foreground',
    'text-foreground/70', // Si usas opacidades directas
    'text-yellow-500', // Colores de iconos específicos
    'text-blue-200',   // Colores de iconos específicos
    'bg-indigo-700',   // Color del thumb en dark mode
    'bg-gray-800',     // Fondo de switch en dark mode
    'border-gray-700', // Borde de switch en dark mode
    'bg-gray-200',     // Fondo de switch en light mode (si aún lo usas)
    'border-gray-300', // Borde de switch en light mode (si aún lo usas)
    'bg-blue-500',     // Color del thumb en light mode (si aún lo usas)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}