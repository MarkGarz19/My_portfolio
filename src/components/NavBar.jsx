import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/libs/utils";
import { Menu, X, Moon, Sun } from "lucide-react";

import { useLanguage } from '../context/LanguageContext.jsx';


const THEMES = {
    ROOT_DEFAULT: 'root',
    DARK: 'dark',
};

const navItemKeys = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "skill", href: "#skill" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#Contact" },
];

export const NavBar = () => {
    // --- ESTADO Y REF PARA EL COMPORTAMIENTO DEL NAV BAR ---
    const [isScrolled, setIsScrolled] = useState(false); // Estado para el encogimiento del NavBar
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil
    const navRef = useRef(null);

    // --- LÓGICA DE TRADUCCIÓN DEL CONTEXTO ---
    const { currentLang, toggleLanguage, t } = useLanguage();

    // Lógica del Tema 
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

    // --- EFECTO PARA EL COMPORTAMIENTO 'isScrolled' DEL NAV BAR ---
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            // Limpiamos el event de listener al desmontar el componente
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // El array vacío nos asegura que este efecto se ejecute solo una vez al montar

    return (
        <nav
            ref={navRef}
            className={cn("fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex justify-between" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">{t('portfolio_title_name')}</span> {t('portfolio_title_suffix')}
                    </span>
                </a>

                {/* Elementos para la versión de ESCRITORIO */}
                <div className="hidden md:flex space-x-9 items-center">
                    {navItemKeys.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400">
                            {t(item.key)}
                        </a>
                    ))}
                    {/* BOTÓN DE IDIOMA PARA ESCRITORIO */}
                    <button
                        onClick={toggleLanguage}
                        className="ml-4 px-3 py-1 rounded-full bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors"
                        aria-label="Toggle language"
                    >
                        {currentLang === 'es' ? 'English' : 'Spanish'}
                    </button>

                    {/* BOTÓN THEMETOGGLE PARA ESCRITORIO */}
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-[3px] rounded-full w-14 h-7 inline-flex items-center justify-between",
                            "relative",
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
                        ></div>
                        <Moon
                            className={cn(
                                "h-4 w-4 transition-opacity duration-300 ml-auto mr-1",
                                theme === THEMES.ROOT_DEFAULT ? "opacity-0" : "opacity-100",
                                theme === THEMES.DARK ? "text-blue-200" : ""
                            )}
                        />
                    </button>
                </div>

                {/* Elementos para la versión MÓVIL (ThemeToggle + botón de menú + Botón de Idioma) */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* BOTÓN DE IDIOMA PARA MÓVIL */}
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors"
                        aria-label="Toggle language"
                    >
                        {currentLang === 'es' ? 'EN' : 'ES'} {/* Versión corta para móvil */}
                    </button>

                    {/* BOTÓN THEMETOGGLE PARA MÓVIL */}
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-[3px] rounded-full w-14 h-7 inline-flex items-center justify-between",
                            "relative",
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
                                theme === THEMES.ROOT_DEFAULT ? "opacity-0" : "opacity-100",
                                theme === THEMES.ROOT_DEFAULT ? "text-yellow-500" : ""
                            )}
                        />
                        <div
                            className={cn(
                                "w-6 h-6 rounded-full shadow-md transition-all duration-500 ease-in-out absolute",
                                theme === THEMES.ROOT_DEFAULT && "translate-x-0 bg-[hsl(var(--primary))]",
                                theme === THEMES.DARK && "translate-x-[calc(100%+0.3rem)] bg-indigo-700"
                            )}
                        ></div>
                        <Moon
                            className={cn(
                                "h-4 w-4 transition-opacity duration-300 ml-auto mr-1",
                                theme === THEMES.ROOT_DEFAULT ? "opacity-0" : "opacity-100",
                                theme === THEMES.DARK ? "text-blue-200" : ""
                            )}
                        />
                    </button>
                    {/* Botón de menú móvil */}
                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* mobile nav overlay menu */}
                <div className={cn(
                    "fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-200 md:hidden",
                    "h-[100dvh] h-screen overflow-y-auto",
                    isMenuOpen ? "opacity-100 pointer-events-auto"
                               : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-9 text-xl py-20 w-full items-center">
                        {navItemKeys.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400"
                                onClick={() => setIsMenuOpen(false)}>
                                {t(item.key)}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

        </nav>
    );
};