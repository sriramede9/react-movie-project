import { createContext, useState, useContext, } from "react";

const LanguagueContext = createContext();

export const useLanguagueContext = () => useContext(LanguagueContext);

const translations = {
    en: {
        home: "Home",
        favorites: "Favorites",
        movieApp: "Movie App",
    },
    fr: {
        home: "Accueil",
        favorites: "Favoris",
        movieApp: "Application de Films",
    },
};

export const LanguageProvider = ({ children }) => {

    // State to hold the language
    // Initialize with default language
    const [language, setLanguage] = useState('en');
    // state to hold the language

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
        console.log(language);
    }

    return (
        <LanguagueContext.Provider value={{ language, toggleLanguage,translations: translations[language] }}>
            {children}
        </LanguagueContext.Provider>
    );
}
