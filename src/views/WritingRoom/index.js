import React, { useState } from 'react';
import './writingroom.css'; // Assuming this is the CSS file for WritingRoom
import { useAuth } from "../../auth/AuthContext";
import { BsXLg } from "react-icons/bs";
import YourLife from './YourLife'; // Assuming you have a YourLife component
import Journal from './Journal'; // Assuming you have a Journal component

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
    <div style={roomStyle} className='writ-room-container'>
      <div className="room-menu">
        <button className="menu-btn" onClick={() => setShowYourLife(true)}>
          <img src="" alt="This Is Your Life" />
          <span>This Is Your Life</span>
        </button>
        <button className="menu-btn" onClick={() => setShowJournal(true)}>
          <img src="" alt="Journaling" />
          <span>Journaling</span>
        </button>
      </div>
      {(showYourLife || showJournal) && <div className="overlay" />}
      {showYourLife && <YourLife setShowYourLife={setShowYourLife} handlePhotoClick={handlePhotoClick} photoAlbum='' />}
      {showJournal && <Journal setShowJournal={setShowJournal} handlePhotoClick={handlePhotoClick} photoAlbum='' />}
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
