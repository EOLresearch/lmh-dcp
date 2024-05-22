import React, { useState } from 'react';
import './reminiscenceroom.css';
import { useAuth } from "../../auth/AuthContext";
import { BsXLg } from "react-icons/bs";
import MemoryLane from './MemoryLane';
import WallOfFame from './WallOfFame';

import fame from '../../assets/img/fame.png'
import memory from '../../assets/img/memory.png'

import dogplayingstock from '../../assets/img/stockphotos/dogplayingstock.png'
import familypicnicstock from '../../assets/img/stockphotos/familypicnicstock.png'
import mountainstock from '../../assets/img/stockphotos/mountainstock.png'
import parisstock from '../../assets/img/stockphotos/parisstock.png'

const photoAlbum = [
  { id: 1, src: dogplayingstock, caption: 'Dog Playing' },
  { id: 2, src: familypicnicstock, caption: 'Family Picnic' },
  { id: 3, src: mountainstock, caption: 'Mountain' },
  { id: 4, src: parisstock, caption: 'Paris' },
];

function ReminiscenceRoom() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const [showMemoryLane, setShowMemoryLane] = useState(false);
  const [showWallOfFame, setShowWallOfFame] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.rem})`,
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  const handleAddPhoto = (newPhoto) => {
    // setPhotoAlbum([...photoAlbum, newPhoto]);
  };

  return (
    <div style={roomStyle} className='room-container'>
      <div className="room-menu">
        <button className="menu-btn" onClick={() => setShowMemoryLane(true)}>
          <img src={memory} alt="Writing Down Memory Lane" />
          <span>Writing Down Memory Lane</span>
        </button>
        <button className="menu-btn" onClick={() => setShowWallOfFame(true)}>
          <img src={fame} alt="Wall of Fame" />
          <span>Wall of Fame</span>
        </button>
      </div>
      {(showMemoryLane || showWallOfFame) && <div className="overlay" />}
      {showMemoryLane && <MemoryLane setShowMemoryLane={setShowMemoryLane} handlePhotoClick={handlePhotoClick} photoAlbum={photoAlbum} handleAddPhoto={handleAddPhoto}/>}
      {showWallOfFame && <WallOfFame setShowWallOfFame={setShowWallOfFame} handlePhotoClick={handlePhotoClick} photoAlbum={photoAlbum} />}
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

export default ReminiscenceRoom;
