import React, { useEffect } from 'react';
import {StarBackground} from "@/components/StarBackground"
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { LanguageProvider } from '../context/LanguageContext.jsx';

export const Home = () => {
    useEffect(() => {
        const handleGlobalAnchorClick = (event) => {
            if (event.target.matches('a[href^="#"]')) {
                const targetId = event.target.hash;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    event.preventDefault();

                    const navbar = document.querySelector('nav');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;

                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleGlobalAnchorClick);

        return () => {
            document.removeEventListener('click', handleGlobalAnchorClick);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <LanguageProvider>
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <NavBar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </LanguageProvider>
        </div>
    );
};