import React, { useEffect, useState } from 'react';
import { useAuth } from '../useAuth/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { loggedIn, error, login, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        await login('john-doe', 'password123');
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    authenticate();
  }, [login]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!loggedIn) {
    return <Navigate to='/'/>;
  }

  return children;
};
