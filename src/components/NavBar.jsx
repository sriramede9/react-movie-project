import { Link } from "react-router-dom";
import "../css/NavBar.css"
import { useThemeContext } from "../context/ThemeContext";
import { useLanguagueContext } from "../context/LanguageContext";

function NavBar() {
    const { theme, toggleTheme } = useThemeContext();
    const { langage, toggleLanguage,translations } = useLanguagueContext();

    return <nav className={`navbar ${theme}-theme`}>
        <div className="navbar-brand">
            <Link to="/" className="nav-link">{translations.movieApp}</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">{translations.home}</Link>
            <Link to="/favorites" className="nav-link">{translations.favorites}</Link>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "🌞"}
            </button>
            <button className={`language-toggle-btn-${theme}-theme`} onClick={toggleLanguage}>
                {langage === "en" ? "EN" : "FR"}
            </button>
        </div>
    </nav>
}

export default NavBar