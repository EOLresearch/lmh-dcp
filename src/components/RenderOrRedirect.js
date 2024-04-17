import React from 'react';
import Login from '../views/Login';
import HouseSelection from '../views/HouseSelection';
import { useAuth } from '../auth/AuthContext';

const RenderOrRedirect = ({ intendedComponent: Component }) => {
  const { userData, isAuthenticated } = useAuth();
  console.log('userData:', userData);

  if (isAuthenticated) {
    if (userData.houseSelection) {
      return <Component />;
    } else {
      return <HouseSelection />;
    }
  } else {
    return <Login />;
  }
};

export default RenderOrRedirect;
