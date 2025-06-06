import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/libs/utils";
import { Menu, X, Moon, Sun } from "lucide-react";

const THEMES = {
  ROOT_DEFAULT: 'root', // Modo día por defecto
  DARK: 'dark',        // Modo noche
};

const navItems = [
    {name:"Home", href:"#hero"},
    {name:"About", href:"#about"},
    {name:"Skill", href:"#skill"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#Contact"},
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    // Lógica del ThemeToggle (ahora dentro de NavBar)
    const [theme, setTheme] = useState(THEMES.ROOT_DEFAULT); // Estado del tema

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        document.documentElement.classList.remove(THEMES.DARK); // Limpiar la clase dark al inicio

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
    // Fin de la lógica del ThemeToggle


    // Lógica del Scroll y Anchor Links (como ya la tenías)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);

        const links = navRef.current.querySelectorAll('a[href^="#"]');

        const handleAnchorClick = (event) => {
            const targetId = event.currentTarget.hash;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                const navbarHeight = navRef.current ? navRef.current.offsetHeight : 0;
                
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                setIsMenuOpen(false);
            }
        };

        links.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            links.forEach(link => {
                link.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);
    // Fin de la lógica del Scroll y Anchor Links


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
                        <span className="text-glow text-foreground">Markus</span> Portfolio
                    </span>
                </a>

                {/* Elementos para la versión de ESCRITORIO */}
                <div className="hidden md:flex space-x-9 items-center">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400">
                            {item.name}
                        </a>
                    ))}
                    {/* BOTÓN THEMETOGGLE PARA ESCRITORIO */}
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-[3px] rounded-full w-14 h-7 inline-flex items-center justify-between",
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

                {/* Elementos para la versión MÓVIL (ThemeToggle + botón de menú) */}
                <div className="md:hidden flex items-center space-x-4"> {/* Añadido space-x-4 para separar el toggle y el botón de menú */}
                    {/* BOTÓN THEMETOGGLE PARA MÓVIL: visible en el navbar móvil */}
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
                    {/* Botón de menú móvil */}
                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* mobile nav overlay menu (este sí se oculta/muestra) */}
                <div className={cn(
                    "fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-200 md:hidden",
                    "max-h-dvh overflow-y-auto", // Se mantiene el scroll y la altura estable
                    isMenuOpen ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-9 text-xl py-20 w-full items-center"> {/* w-full y items-center para centrar el contenido */}
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400"
                                onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                        {/* El BOTÓN THEMETOGGLE NO SE REPITE AQUÍ DENTRO DEL OVERLAY */}
                    </div>
                </div>

            </div>

        </nav>
    );
};