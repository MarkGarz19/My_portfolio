import { ExternalLink, Github } from "lucide-react"
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id:1,
        title:"App_Temperatura_Pais",
        description:"This project obtains and displays information on the current temperatures of the countries of Europe, as well as the borders between the countries, using a MySQL Workbench database and external APIs (JSON and XML) to obtain climate data.",
        image:"/projects/project2.png",
        tags:["Python","Html","Mysql","Tailwind"],
        demoUrl:"#",
        githubUrl:"https://github.com/MarkGarz19/App_Temperatura_Pais",
    },
    {
        id:2,
        title:"Traductor_Azure",
        description:"This project uses Flask as a web framework and takes advantage of the services of Azure Cognitive Services to offer advanced text translation, voice recognition (Speech-to-Text) and voice synthesis (Text-to-Speech) functionalities. The general operation and main characteristics of the system are described below.",
        image:"/projects/project1.png",
        tags:["Python","Html","Tailwind","Api"],
        demoUrl:"#",
        githubUrl:"https://github.com/MarkGarz19/Traductor_Azure",
    },
    {
        id:3,
        title:"Elegance-Mode",
        description:"This project is a full-stack e-commerce application. The backend, developed with Node.js and Express.js, functions as a RESTful API managing business logic, user data, products, and shopping carts following an MVC pattern. The frontend is built with HTML, CSS, and JavaScript (Vanilla JS), providing interactive static pages for catalog Browse, shopping cart management, and user authentication. The system delivers a complete and modular solution for an online store, featuring a robust server and a dynamic user interface.",
        image:"/projects/project3.png",
        tags:["Html","Css","JavaScript","Node","Express"],
        demoUrl:"#",
        githubUrl:{
                frontend: "https://github.com/MarkGarz19/Frontend_Elegance-Mode",
                backend: "https://github.com/MarkGarz19/Backend_Elegance_Mode"
            },
    },
]

export const ProjectSection = () =>{
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium border bg-primary/50 rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3.5">
                                        {project.demoUrl && (
                                            <a href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink size={20}/>
                                            </a>
                                        )}

                                        {typeof project.githubUrl === 'object' && project.githubUrl !== null ? (
                                            <>
                                                {project.githubUrl.frontend && (
                                                    <a href={project.githubUrl.frontend}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-1">
                                                        <Github size={20}/>
                                                        <span className="text-xs">Frontend</span>
                                                    </a>
                                                )}
                                                {project.githubUrl.backend && (
                                                    <a href={project.githubUrl.backend}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-1">
                                                        <Github size={20}/>
                                                        <span className="text-xs">Backend</span>
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            project.githubUrl && (
                                                <a href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                    <Github size={20}/>
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/MarkGarz19">
                        Check My Github <ArrowRight size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
};