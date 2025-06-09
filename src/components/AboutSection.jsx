import { Brain, Code, User } from "lucide-react";
import { useLanguage } from '../context/LanguageContext.jsx';

export const AboutSection = () => {
    const { t } = useLanguage();
    return (
        <section
            id="about"
            className="py-16 px-4 relative sm:py-24"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center sm:text-3xl md:mb-12">
                    {t('about_title')} <span className="text-primary">{t('about_title_emphasis')}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start sm:gap-12">
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-xl font-semibold sm:text-2xl">
                            {t('passionate_developer_title')}
                        </h3>
                        <p className="text-sm text-[hsl(var(--secondary-foreground))] sm:text-base">
                            {t('about_description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-center">
                            {/* Eliminado onClick={handleAnchorClick} */}
                            <a href="#Contact" className="cosmic-button text-sm sm:text-base">{t('get_in_touch_button')}</a>
                            <a href="/CV_MarkusGarzon.pdf" download="CV_MarkusGarzon.pdf" className="px-5 py-1.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm sm:px-6 sm:py-2 sm:text-base">
                                {t('download_cv_button')}
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        <div className="gradient-border p-4 card-hover bg-card shadow-[var(--color-card-shadow)] sm:p-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <Code className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-base sm:text-lg text-foreground">{t('web_dev_title')}</h4>
                                    <p className="text-xs text-[hsl(var(--secondary-foreground))] sm:text-sm">
                                        {t('web_dev_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-4 card-hover bg-card shadow-[var(--color-card-shadow)] sm:p-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <User className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-base sm:text-lg text-foreground">{t('big_data_title')}</h4>
                                    <p className="text-xs text-[hsl(var(--secondary-foreground))] sm:text-sm">
                                        {t('big_data_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-4 card-hover bg-card shadow-[var(--color-card-shadow)] sm:p-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <Brain className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-base sm:text-lg text-foreground">{t('ai_solutions_title')}</h4>
                                    <p className="text-xs text-[hsl(var(--secondary-foreground))] sm:text-sm">
                                        {t('ai_solutions_description')}
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