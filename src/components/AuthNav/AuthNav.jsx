import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const getClassName = isActive => clsx(css.link, isActive && css.active);

  return (
    <div className={css.container}>
      <NavLink className={getClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
