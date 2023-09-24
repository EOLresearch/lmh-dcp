import React from 'react';
import Login from '../../views/Login';

const isAuthenticated = false;

const RenderOrRedirect = ({ intendedComponent: Component }) => {
  if (isAuthenticated) {
    return <Component />;
  } else {
    return <Login />;
  }
};

export default RenderOrRedirect;