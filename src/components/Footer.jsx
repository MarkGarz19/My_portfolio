import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export const Footer = () => {
    const {  t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Markus Garzon. All Rights Reserved.
            </p>
            <a href="#root" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};