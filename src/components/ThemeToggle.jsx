import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/libs/utils";

const THEMES = {
  ROOT_DEFAULT: 'root',
  DARK: 'dark',
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(THEMES.ROOT_DEFAULT);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    document.documentElement.classList.remove(THEMES.DARK);

    if (storedTheme === THEMES.DARK) {
      setTheme(THEMES.DARK);
      document.documentElement.classList.add(THEMES.DARK);
    } else {
      localStorage.setItem("theme", THEMES.ROOT_DEFAULT);
      setTheme(THEMES.ROOT_DEFAULT);
      document.documentElement.classList.remove(THEMES.DARK);
    }
  }, []);

  const toggleTheme = () => {
    let nextTheme;
    if (theme === THEMES.ROOT_DEFAULT) {
      nextTheme = THEMES.DARK;
    } else {
      nextTheme = THEMES.ROOT_DEFAULT;
    }

    if (nextTheme === THEMES.DARK) {
      document.documentElement.classList.add(THEMES.DARK);
    } else {
      document.documentElement.classList.remove(THEMES.DARK);
    }

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      // ELIMINADO: 'fixed', 'top-5', 'right-5', 'z-50'
      // El botón ahora se posicionará dentro del flujo del navbar
      className={cn(
        "p-[3px] rounded-full w-14 h-7 flex items-center",
        "transition-all duration-500 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",

        theme === THEMES.ROOT_DEFAULT && "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(280_80%_75%)] border border-[hsl(var(--primary))]",
        
        theme === THEMES.DARK && "bg-gray-800 border border-gray-700"
      )}
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "h-4 w-4 transition-opacity duration-300 mx-1",
          theme === THEMES.DARK ? "opacity-0" : "opacity-100",
          theme === THEMES.ROOT_DEFAULT ? "text-yellow-500" : ""
        )}
      />

      <div
        className={cn(
          "w-6 h-6 rounded-full shadow-md transition-all duration-500 ease-in-out absolute",
          theme === THEMES.ROOT_DEFAULT && "translate-x-0 bg-[hsl(var(--primary))]",
          theme === THEMES.DARK && "translate-x-[calc(100%+0.3rem)] bg-indigo-700"
        )}
      />

      <Moon
        className={cn(
          "h-4 w-4 transition-opacity duration-300 ml-auto mr-1",
          theme === THEMES.ROOT_DEFAULT ? "opacity-0" : "opacity-100",
          theme === THEMES.DARK ? "text-blue-200" : ""
        )}
      />
    </button>
  );
};