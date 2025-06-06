import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    const handleViewMyWorkClick = (event) => {
        event.preventDefault();

        const targetId = event.currentTarget.hash;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight px-4 sm:px-0"> {/* AÑADIDO: px-4 sm:px-0 */}
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Markus </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Garzon</span>
                    </h1>
                    {/* Añadido max-w-md para el párrafo y quizás px-4 */}
                    <p className="text-lg md:text-xl text-[hsl(var(--secondary-foreground))] max-w-md mx-auto opacity-0 animate-fade-in-delay-3 px-4 sm:px-0"> {/* CAMBIO: max-w-md y px-4 */}
                        I build web applications using modern technologies and clean code practices.
                        With a background in front-end development and a specialization in Big Data & AI,
                        I create efficient, scalable, and user-friendly solutions ready for real-world impact.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button" onClick={handleViewMyWorkClick}>
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-[hsl(var(--secondary-foreground))] mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};