import { createContext, useContext, useEffect, useState } from 'react';

// Створюємо контекст з початковим значенням
const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Якщо тема не збережена або 'dark', повертаємо true
    return !savedTheme || savedTheme === 'dark';
  });

  // Застосовуємо тему при монтуванні та при зміні
  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const value = {
    isDarkTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
