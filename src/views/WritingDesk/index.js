import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './writingdesk.css';
import { useAuth } from "../../auth/AuthContext";

import life  from '../../assets/img/life.png'
import journal from '../../assets/img/journal.png'

function WritingDesk() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.writ})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 100px)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={roomStyle}>
    <div className="room-menu">
      <button className="menu-btn" >
        <img src={life} alt="This Is Your Life" />
        <span>This Is Your Life</span>
      </button>
      <button className="menu-btn">
        <img src={journal} alt="Journaling" />
        <span>Journaling</span>
      </button>
    </div>
  </div>
  );
}

export default WritingDesk;
