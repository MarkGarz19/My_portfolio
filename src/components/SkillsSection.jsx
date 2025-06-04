import { useState } from "react";
import { cn } from "@/libs/utils";

const skills = [
  // Frontend
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "frontend" },
  { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },

  // Backend
  { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "backend" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "backend" },
  // Tools
  { name: "Git/GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools" },
  { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
  { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools" },
  { name: "Eclipse", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg", category: "tools" },
  // data_ai
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "data_ai" },
  { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "data_ai" },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "data_ai" },
];

const categories = ["all", "frontend", "backend","data_ai", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skill" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((categoryItem, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(categoryItem)}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-colors duration-300 capitalize",
                activeCategory === categoryItem
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryItem}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, key) => (
                <div
                  key={key}
                  className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-16 w-16 mb-4 object-contain"
                  />
                  <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No skills found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};