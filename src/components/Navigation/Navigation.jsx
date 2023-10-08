import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/authHooks.js';
import clsx from 'clsx';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const getClassName = isActive => clsx(css.link, isActive && css.active);

  return (
    <nav className={css.nav}>
      <NavLink className={getClassName} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getClassName} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
