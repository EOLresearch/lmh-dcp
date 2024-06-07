import React, { useState } from 'react';
import './writingroom.css'; 
import { useAuth } from "../../auth/AuthContext";
import { BsXLg } from "react-icons/bs";
import YourLife from './YourLife'; 
import Journal from './Journal'; 

import life from '../../assets/img/life.png';
import journal from '../../assets/img/journal.png';

function WritingRoom() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const [showYourLife, setShowYourLife] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.writ})`,
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
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
      {showYourLife && <YourLife setShowYourLife={setShowYourLife} handlePhotoClick={handlePhotoClick} />}
      {showJournal && <Journal setShowJournal={setShowJournal} handlePhotoClick={handlePhotoClick} />}
      {selectedPhoto && (
        <div className="maximized-photo-overlay" onClick={handleClosePhoto}>
          <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="maximized-photo" />
          <button className="close-maximized-photo-btn">
            <BsXLg />
          </button>
        </div>
      )}
    </div>
  );
}

export default WritingRoom;
