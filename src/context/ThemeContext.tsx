import { createContext, useEffect, useState } from "react";


type Theme = "light" | "dark";

interface ThemeContextProps{
    children: React.ReactNode;
}

export const ThemeContext = createContext<{
    theme: Theme,
    toggleTheme: () => void
    }>({theme: 'light', toggleTheme: ()=> {},});

export function ThemeProvider({ children }:ThemeContextProps) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);//kgs
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
