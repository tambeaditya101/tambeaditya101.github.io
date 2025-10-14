import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to dark mode

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Dark mode colors
      dark: {
        primary: "from-slate-900 via-purple-900 to-slate-900",
        secondary: "from-purple-600 to-pink-600",
        background: "bg-slate-900",
        surface: "bg-white/5",
        text: "text-white",
        textSecondary: "text-gray-200",
        border: "border-white/10",
        accent: "text-purple-400",
      },
      // Light mode colors
      light: {
        primary: "from-blue-50 via-purple-50 to-pink-50",
        secondary: "from-purple-600 to-pink-600",
        background: "bg-white",
        surface: "bg-gray-100/80",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        border: "border-gray-200",
        accent: "text-purple-600",
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
