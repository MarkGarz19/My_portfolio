import { Brain, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 relative sm:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center sm:text-3xl md:mb-12">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Passionate Web Developer
            </h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              I am a passionate web developer with the ability to build responsive
              and accessible applications. My specialization in Big Data and AI allows
              me to integrate intelligent and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-center">
              <a href="#contact" className="cosmic-button text-sm sm:text-base">Get In Touch</a>
              <a href="/CV_MarkusGarzon.pdf" download="CV_MarkusGarzon.pdf" className="px-5 py-1.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm sm:px-6 sm:py-2 sm:text-base">
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="gradient-border p-4 card-hover sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg">Web Application Development</h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    With a solid base in web development, I focus on the building of interactive and responsive applications, applying best practices and modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg">Big Data Analysis and Management</h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Trained in the collection, processing, and analysis of large volumes of data. Interested in transforming complex data into key insights for decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Brain className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg">AI Solutions Implementation</h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Passionate about Artificial Intelligence, with knowledge in Machine Learning to develop predictive models and innovative applications that solve problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};