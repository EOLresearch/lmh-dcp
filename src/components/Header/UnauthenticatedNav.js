import React from 'react';
import { Link } from 'react-router-dom';

function UnauthenticatedNav({ toggleModal }) {
  return (
    <div className='nav-sub-container'>
      <Link to="/"><button>Home</button></Link>
      <button onClick={() => toggleModal('showAboutUs')}>About Us</button>
      <button onClick={() => toggleModal('showResources')}>Resources for Dementia Care Pairs</button>
      <button onClick={() => toggleModal('showContact')}>Contact</button>
    </div>
  );
}

export default UnauthenticatedNav;
