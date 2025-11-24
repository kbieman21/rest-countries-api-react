import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: "var(--elements)", padding: "1rem 2rem" }} className="navbar">
      <h2>Where in the world?</h2>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}

export default NavBar;
