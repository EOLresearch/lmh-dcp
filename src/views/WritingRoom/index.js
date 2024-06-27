import React, { useState } from 'react';
import './writingroom.css'; 
import { useAuth } from "../../auth/AuthContext";
import { BsXLg } from "react-icons/bs";
import YourLife from './YourLife/YourLife.js'; 
import Journal from './Journal'; 

import life from '../../assets/img/life.png';
import journal from '../../assets/img/journal.png';

function WritingRoom() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const [showYourLife, setShowYourLife] = useState(false);
  const [showJournal, setShowJournal] = useState(false);

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.writ})`,
  };



  return (
    <div style={roomStyle} className='room-container'>
      <div className="room-menu">
        <button className="menu-btn" onClick={() => setShowYourLife(true)}>
          <img src={life} alt="This Is Your Life" />
          <span>This Is Your Life</span>
        </button>
        <button className="menu-btn" onClick={() => setShowJournal(true)}>
          <img src={journal} alt="Journaling" />
          <span>Journaling</span>
        </button>
      </div>
      {(showYourLife || showJournal) && <div className="overlay" />}
      {showYourLife && <YourLife setShowYourLife={setShowYourLife}  />}
      {showJournal && <Journal setShowJournal={setShowJournal} />}
    </div>
  );
}

export default WritingRoom;
