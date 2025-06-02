import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";
const navItems = [
    {name:"Home", href:"#hero"},
    {name:"About", href:"#about"},
    {name:"Skill", href:"#skill"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#Contact"},
]

export const NavBar = () =>{
    const [isScrolled, setIsScrolled]= useState(false);
    const [isMenuOpen, setIsMenuOpen]= useState(true);

    useEffect( () => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
    },[])
    return(
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>

        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex justify-between" href="#hero">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Markus</span> Portfolio
                </span>
            </a>

            {/* desktop nav */}
            <div className="hidden md:flex space-x-9">
                {navItems.map((item,key)=>(
                    <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400">
                        {item.name}
                    </a>
                ))}
            </div>


            {/* mobile nav */}
            <div className={cn("fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-200 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto"
                 : "opacity-0 pointer-events-auto"
            )}>
                 <div className="flex flex-col space-y-9 text-xl">
                    {navItems.map((item,key)=>(
                        <a key={key} href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-400"
                        onClick={()=> setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                 </div>
            </div>
           
        </div>

        </nav>
    )
}