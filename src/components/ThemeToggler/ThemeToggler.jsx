import { useTheme } from '../../context/ThemeContext';
import css from './ThemeToggler.module.css';

export const ThemeToggler = () => {
  // Проверяем, что useTheme возвращает объект перед деструктуризацией
  const themeContext = useTheme();
  
  // Если контекст не определен, показываем кнопку без функциональности
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
