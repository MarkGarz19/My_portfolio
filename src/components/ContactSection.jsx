import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/libs/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from '../context/LanguageContext.jsx';

export const ContactSection = () => {
    const { t } = useLanguage(); 
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
                    title: t("toast_success_title"),
                    description: t("toast_success_description"),
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Error al enviar el formulario (Formspree):", data);
                toast({
                    title: t("toast_error_send_title"),
                    description: data.errors ? data.errors.map(err => err.message).join(', ') : t("toast_error_send_description_default"),
                    variant: "destructive",
                });
            }
        })
        .catch(error => {
            console.error("Error de red o del servidor:", error);
            toast({
                title: t("toast_error_connection_title"),
                description: t("toast_error_connection_description"),
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
                    {t('contact_get_in')}<span className="text-primary">{t('contact_touch_emphasis')}</span>
                </h2>
                <p className="text-center text-[hsl(var(--secondary-foreground))] mb-12 max-w-2xl mx-auto">
                    {t('contact_intro_paragraph')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-foreground">
                            {t('contact_info_title')}
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-foreground">{t('email_title')}</h4>
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
                                    <h4 className="font-medium text-foreground">{t('phone_title')}</h4>
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
                                    <h4 className="font-medium text-foreground">{t('location_title')}</h4>
                                    <p className="text-[hsl(var(--secondary-foreground))]">
                                        {t('location_city')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-foreground text-center">{t('connect_with_me_title')}</h4>
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
                        <h3 className="text-2xl font-semibold mb-6 text-foreground"> {t('send_message_title')} </h3>
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            action="https://formspree.io/f/mvgrzrok"
                            method="POST"
                        >
                            <input type="hidden" name="_replyto" value={formData.email} />
                            
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                                    {t('your_name_label')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder={t('your_name_placeholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                                    {t('your_email_label')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder={t('your_email_placeholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                                    {t('your_message_label')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder={t('your_message_placeholder')}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn('cosmic-button w-full flex items-center justify-center gap-2',
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? t("sending_button") : t("send_message_button")}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};