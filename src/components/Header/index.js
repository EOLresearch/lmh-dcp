import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/img/logo2-lmh-dcp.png'
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from './UnauthenticatedNav';
import { useAuth } from '../../auth/AuthContext';

function Header({ toggleModal }) {
  const { isAuthenticated } = useAuth();
  return (
    <header>
      <div className='logo-container'>
        <Link to="/"><img src={logo2} alt="Living Memory Home" /></Link>
      </div>
      <div className='nav-container'>
        {isAuthenticated ? (
          <AuthenticatedNav />
        ) : (
          <UnauthenticatedNav toggleModal={toggleModal} />
        )}
      </div>
    </header>
  );
}

export default Header;
