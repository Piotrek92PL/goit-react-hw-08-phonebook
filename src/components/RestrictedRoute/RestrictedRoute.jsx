import { useAuth } from '../../hooks/authHooks.js';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};
