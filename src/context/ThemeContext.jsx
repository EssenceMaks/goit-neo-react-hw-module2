import { createContext, useContext, useEffect, useState } from 'react';

// Создаем контекст с начальным значением
const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Если тема не сохранена или 'dark', возвращаем true
    return !savedTheme || savedTheme === 'dark';
  });

  // Применяем тему при монтировании и при изменении
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
