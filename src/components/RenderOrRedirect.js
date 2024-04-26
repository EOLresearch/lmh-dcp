import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../views/Login';
import HouseSelection from '../views/HouseSelection';
import { useAuth } from '../auth/AuthContext';

const RenderOrRedirect = ({ intendedComponent: Component }) => {
  const { userData, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    if (userData && userData.houseSelection) {
      return <Component />;
    } else {
      return <HouseSelection />;
    }
  } else {
    return <Login />;
  }
};

export default RenderOrRedirect;