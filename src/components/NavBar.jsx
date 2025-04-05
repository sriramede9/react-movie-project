import { Link } from "react-router-dom";
import "../css/NavBar.css"
import { useThemeContext } from "../context/ThemeContext";

function NavBar() {
    const { theme, toggleTheme } = useThemeContext();

    return <nav className={`navbar ${theme}-theme`}>
        <div className="navbar-brand">
            <Link to="/" className="nav-link">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "🌞"}
            </button>
        </div>
    </nav>
}

export default NavBar