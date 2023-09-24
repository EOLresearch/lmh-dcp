import React from 'react';
import Login from '../../views/Login';

// const isAuthenticated = true;

const RenderOrRedirect = ({ loginSwitch, isAuthenticated, intendedComponent: Component }) => {
  if (isAuthenticated) {
    return <Component />;
  } else {
    return <Login loginSwitch={loginSwitch}/>;
  }
};

export default RenderOrRedirect;