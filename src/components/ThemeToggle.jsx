import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/libs/utils";

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK);

    if (Object.values(THEMES).includes(storedTheme)) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme); 
    } else {
      localStorage.setItem("theme", THEMES.LIGHT);
      setTheme(THEMES.LIGHT);
      document.documentElement.classList.add(THEMES.LIGHT); 
    }
  }, []); 

  const toggleTheme = () => {
    let nextTheme;
    if (theme === THEMES.LIGHT) {
      nextTheme = THEMES.DARK;
    } else {
      nextTheme = THEMES.LIGHT;
    }
    document.documentElement.classList.remove(theme);

    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-[3px] rounded-full w-14 h-7 flex items-center",
        "transition-all duration-500 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",

        theme === THEMES.LIGHT && "bg-gradient-to-r from-[hsl(var(--background))] to-[hsl(var(--border))] border border-[hsl(var(--border))]",

        theme === THEMES.DARK && "bg-gray-800 border border-gray-700"
      )}
      aria-label="Toggle theme"
    >
      {/* Icono del Sol */}
      <Sun
        className={cn(
          "h-4 w-4 transition-opacity duration-300 mx-1",
          theme === THEMES.DARK ? "opacity-0" : "opacity-100",
          theme === THEMES.LIGHT ? "text-yellow-500" : ""
        )}
      />

      {/* El "thumb" o indicador que se mueve */}
      <div
        className={cn(
          "w-6 h-6 rounded-full shadow-md transition-all duration-500 ease-in-out absolute",
          // Posición y color del thumb según el tema
          theme === THEMES.LIGHT && "translate-x-0 bg-[hsl(var(--primary))]",
          theme === THEMES.DARK && "translate-x-[calc(100%+0.3rem)] bg-indigo-700"
        )}
      />

      {/* Icono de la Luna */}
      <Moon
        className={cn(
          "h-4 w-4 transition-opacity duration-300 ml-auto mr-1",
          theme === THEMES.LIGHT ? "opacity-0" : "opacity-100",
          theme === THEMES.DARK ? "text-blue-200" : ""
        )}
      />
    </button>
  );
};