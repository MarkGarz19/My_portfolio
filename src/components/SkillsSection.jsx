import { useState } from "react";
import { cn } from "@/libs/utils";

const skills = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
    { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "frontend" },
    { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
    { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "backend" },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "backend" },
    { name: "Git/GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
    { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools" },
    { name: "Eclipse", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg", category: "tools" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "data_ai" },
    { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "data_ai" },
    { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "data_ai" },
];

export const SkillsSection = () => {
    const skillsToDisplay = [...skills, ...skills];

    return (
        <section id="skill" className="py-24 px-4 relative bg-[hsl(var(--background))]">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex justify-center">
                    <div className="w-full overflow-hidden relative">
                        <div
                            className="flex flex-nowrap gap-6 items-stretch animate-scroll-x"
                            style={{ width: `${(skills.length * (240 + 24)) * 2}px` }}
                        >
                            {skillsToDisplay.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center text-center flex-shrink-0"
                                    style={{ minWidth: '240px' }}
                                >
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="h-20 w-20 mb-4 object-contain"
                                    />
                                    <h3 className="font-semibold text-xl text-foreground">{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};