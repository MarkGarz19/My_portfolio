import { useState } from "react"
import { Moon, Sun } from "lucide-react";
export const ThemeToggle = () =>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    return <button>{isDarkMode ? <Sun h-6/> : <Moon />} </button>
}