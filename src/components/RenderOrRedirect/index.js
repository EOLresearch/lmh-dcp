import React from 'react';
import Login from '../../views/Login';

// Placeholder, replace with your authentication logic.
const isAuthenticated = false;

const RenderOrRedirect = ({ intendedComponent: Component }) => {
  if (isAuthenticated) {
    return <Component />;
  } else {
    return <Login />;
  }
};

export default RenderOrRedirect;