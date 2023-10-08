import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from '@mui/material';
import { useAuth } from '../../hooks/authHooks.js';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.email}> {user.email}</p>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};
