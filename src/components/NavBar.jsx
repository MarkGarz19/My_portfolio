import { cn } from "@/libs/utils";
import { Menu,X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "../components/ThemeToggle"; 

const navItems = [
    {name:"Home", href:"#hero"},
    {name:"About", href:"#about"},
    {name:"Skill", href:"#skill"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#Contact"},
]

export const NavBar = () =>{
    const [isScrolled, setIsScrolled]= useState(false);
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const navRef = useRef(null);

    useEffect( () => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)

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
            window.removeEventListener("scroll", handleScroll)
            links.forEach(link => {
                link.removeEventListener('click', handleAnchorClick);
            });
        }
    },[])

    return(
        <nav
            ref={navRef}
            className={cn("fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}>

        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex justify-between" href="#hero">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Markus</span> Portfolio
                </span>
            </a>

            {/* desktop nav */}
            <div className="hidden md:flex space-x-9 items-center"> {/* Añadido items-center para alinear ThemeToggle */}
                {navItems.map((item,key)=>(
                    <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400">
                        {item.name}
                    </a>
                ))}
                <ThemeToggle />
            </div>


            {/* mobile nav */}
            <button onClick={()=>setIsMenuOpen((prev)=>!prev)} 
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                {isMenuOpen ? <X size={24} />: <Menu size={24} />}
            </button>
            <div className={cn("fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-200 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto"
                   : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-9 text-xl">
                    {navItems.map((item,key)=>(
                        <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400"
                        onClick={()=> setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
            
        </div>

        </nav>
    )
}