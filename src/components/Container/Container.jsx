import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import css from './Container.module.css';

export const Container = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.themeTogglerWrapper}>
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};
