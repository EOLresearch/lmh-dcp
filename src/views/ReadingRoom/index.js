import React, { useState } from 'react';
import './readingroom.css';
import { useAuth } from "../../auth/AuthContext";
import ResourceDictionary from './ResourceDictionary';
import TipsTricks from './TipsTricks';
import InformationStation from './InformationStation';

import resourcedict from '../../assets/img/recoursedict.png'
import tips from '../../assets/img/tips.png'
import infostation from '../../assets/img/infostation.png'

function ReadingRoom() {
  const { userData } = useAuth();
  const { houseSelection } = userData;
  
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.read})`,
  };

  return (
    <div className="room-container" style={roomStyle}>
      <div className="room-menu">
        <button className="menu-btn" onClick={() => handleButtonClick('ResourceDictionary')}>
          <img src={resourcedict} alt="Resource Dictionary" />
          <span>Resource Dictionary</span>
        </button>
        <button className="menu-btn" onClick={() => handleButtonClick('TipsTricks')}>
          <img src={tips} alt="Tips & Tricks" />
          <span>Tips & Tricks</span>
        </button>
        <button className="menu-btn" onClick={() => handleButtonClick('InformationStation')}>
          <img src={infostation} alt="Information Station" />
          <span>Information Station</span>
        </button>
      </div>
      {activeComponent === 'ResourceDictionary' && <ResourceDictionary />}
      {activeComponent === 'TipsTricks' && <TipsTricks />}
      {activeComponent === 'InformationStation' && <InformationStation />}
    </div>

    
  );
}

export default ReadingRoom;
