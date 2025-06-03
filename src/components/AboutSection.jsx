export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Web Developer
                    </h3>
                    <p className="text-muted-foreground">
                     I am a passionate web developer with the ability to build responsive
                      and accessible applications. My specialization in Big Data and AI allows
                      me to integrate intelligent and efficient solutions.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">Get In Touch</a>
                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className=""></Code>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover"></div>
                <div className="gradient-border p-6 card-hover"></div>
                <div className="gradient-border p-6 card-hover"></div>
            </div>
        </div>
    </section>
    )
}