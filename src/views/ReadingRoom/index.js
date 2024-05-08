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
  
  const [showResourceDictionary, setShowResourceDictionary] = useState(false);
  const [showTipsTricks, setShowTipsTricks] = useState(false);
  const [showInformationStation, setShowInformationStation] = useState(false);

  const handleResourceDictionaryClick = () => {
    setShowResourceDictionary(true);
    setShowTipsTricks(false);
    setShowInformationStation(false);
  };

  const handleTipsTricksClick = () => {
    setShowResourceDictionary(false);
    setShowTipsTricks(true);
    setShowInformationStation(false);
  };

  const handleInformationStationClick = () => {
    setShowResourceDictionary(false);
    setShowTipsTricks(false);
    setShowInformationStation(true);
  };

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.read})`,
  };

  return (
    <div className="room-container" style={roomStyle}>
      <div className="room-menu">
        <button className="menu-btn" onClick={handleResourceDictionaryClick}>
          <img src={resourcedict} alt="Resource Dictionary" />
          <span>Resource Dictionary</span>
        </button>
        <button className="menu-btn" onClick={handleTipsTricksClick}>
          <img src={tips} alt="Tips & Tricks" />
          <span>Tips & Tricks</span>
        </button>
        <button className="menu-btn" onClick={handleInformationStationClick}>
          <img src={infostation} alt="Information Station" />
          <span>Information Station</span>
        </button>
      </div>
      {(showResourceDictionary || showTipsTricks ||showInformationStation ) && <div className="overlay" />}
      {showResourceDictionary && <ResourceDictionary setShowResourceDictionary={setShowResourceDictionary}/>}
      {showTipsTricks && <TipsTricks setShowTipsTricks={setShowTipsTricks} />}
      {showInformationStation && <InformationStation setShowInformationStation={setShowInformationStation} />}
    </div>
  );
}

export default ReadingRoom;
