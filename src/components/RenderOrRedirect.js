import React from 'react';
import Login from '../views/Login';
import { useAuth } from '../auth/AuthContext';

const RenderOrRedirect = ({ intendedComponent: Component }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Component />;
  } else {
    return <Login />;
  }
};

export default RenderOrRedirect;