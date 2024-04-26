import React from 'react';
import './readingroom.css';
import { useAuth } from "../../auth/AuthContext";

import resourcedict from '../../assets/img/recoursedict.png'
import tips from '../../assets/img/tips.png'
import infostation from '../../assets/img/infostation.png'

function ReadingRoom() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.read})`,
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
          <img src={resourcedict} alt="Resource Dictionary" />
          <span>Resource Dictionary</span>
        </button>
        <button className="menu-btn">
          <img src={tips} alt="Tips & Tricks" />
          <span>Tips & Tricks</span>
        </button>
        <button className="menu-btn">
          <img src={infostation} alt="Information Station" />
          <span>Information Station</span>
        </button>
      </div>
    </div>
  );
}

export default ReadingRoom;
