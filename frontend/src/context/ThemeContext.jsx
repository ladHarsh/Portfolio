import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  // Force Dark Mode on Mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    // Optionally remove 'light' if it exists, just in case
    document.documentElement.classList.remove("light");
    localStorage.setItem("darkMode", "true");
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode: true }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
