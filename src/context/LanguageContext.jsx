import React, { createContext, useContext, useState, useEffect } from 'react';

import { translations } from '../libs/translations';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('es');

    useEffect(() => {
        const storedLang = localStorage.getItem("lang");
        if (storedLang && (storedLang === 'es' || storedLang === 'en')) {
            setCurrentLang(storedLang);
        } else {
            const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
            setCurrentLang(browserLang);
            localStorage.setItem("lang", browserLang);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setCurrentLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    const t = (key) => translations[currentLang][key] || key;

    const contextValue = {
        currentLang,
        toggleLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};

// **Paso clave para la compatibilidad con Vite Fast Refresh**
function useLanguageHook() {
    return useContext(LanguageContext);
}
export { useLanguageHook as useLanguage };