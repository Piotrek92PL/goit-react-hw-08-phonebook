import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authHooks.js';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};