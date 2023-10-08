import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom'; 
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hooks/authHooks.js';

const HomePage = lazy(() => import('./Pages/Home/Home.jsx'));
const RegisterPage = lazy(() => import('./Pages/Register/Register.jsx'));
const LoginPage = lazy(() => import('./Pages/Login/Login.jsx'));
const PhonebookPage = lazy(() => import('./Pages/Phonebook/Phonebook.jsx'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <b>Refreshing user...</b>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <PhonebookPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Route>
    </Routes>
  );
}

