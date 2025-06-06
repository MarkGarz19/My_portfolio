import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/libs/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        const formElement = e.target;
        const formActionUrl = formElement.action;
        const method = formElement.method;

        fetch(formActionUrl, {
            method: method,
            body: new FormData(formElement),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                toast({
                    title: "¡Mensaje enviado!",
                    description: "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Error al enviar el formulario (Formspree):", data);
                toast({
                    title: "Error al enviar",
                    description: data.errors ? data.errors.map(err => err.message).join(', ') : "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
                    variant: "destructive",
                });
            }
        })
        .catch(error => {
            console.error("Error de red o del servidor:", error);
            toast({
                title: "Error de conexión",
                description: "No se pudo conectar con el servidor. Revisa tu conexión.",
                variant: "destructive",
            });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section id="Contact" className="py-24 px-4 relative bg-secondary/70">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-[hsl(var(--secondary-foreground))] mb-12 max-w-2xl mx-auto">
                    Is there any project you're thinking about or would you like us to collaborate on?
                    Contact me without obligation. I love exploring new possibilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-foreground">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-foreground">Email</h4>
                                    <a href="mailto:markusbohorquez23@gmail.com"
                                        className="text-[hsl(var(--secondary-foreground))] hover:text-primary transition-colors">
                                        markusbohorquez23@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-foreground">Phone</h4>
                                    <a href="tel:+34641162729"
                                        className="text-[hsl(var(--secondary-foreground))] hover:text-primary transition-colors">
                                        +34 641162729
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-foreground">Location</h4>
                                    <p className="text-[hsl(var(--secondary-foreground))]">
                                        Madrid, España
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-foreground text-center">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/markusgarzon/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Linkedin size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-[var(--color-card-shadow)]">
                        <h3 className="text-2xl font-semibold mb-6 text-foreground"> Send a Message </h3>
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            action="https://formspree.io/f/mvgrzrok"
                            method="POST"
                        >
                            <input type="hidden" name="_replyto" value={formData.email} />
                            
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your Message..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn('cosmic-button w-full flex items-center justify-center gap-2',
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};