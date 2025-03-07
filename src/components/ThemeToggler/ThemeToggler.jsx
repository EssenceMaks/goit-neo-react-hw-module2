import { useTheme } from '../../context/ThemeContext';
import css from './ThemeToggler.module.css';

export const ThemeToggler = () => {
  // Перевіряємо, що useTheme повертає об'єкт перед деструктуризацією
  const themeContext = useTheme();
  
  // Якщо контекст не визначений, показуємо кнопку без функціональності
  if (!themeContext) {
    console.error('ThemeContext не определен. Проверьте, что ThemeProvider правильно настроен.');
    return (
      <button className={css.themeToggler} aria-label="Переключить тему">
        ⚙️
      </button>
    );
  }
  
  const { isDarkTheme, toggleTheme } = themeContext;

  return (
    <button 
      className={css.themeToggler} 
      onClick={toggleTheme} 
      aria-label="Переключить тему"
    >
      {isDarkTheme ? '☀️' : '🌙'}
    </button>
  );
};
