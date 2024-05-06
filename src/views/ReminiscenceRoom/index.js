import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './reminiscenceroom.css';
import { useAuth } from "../../auth/AuthContext";

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

  const [showLifebook, setShowLifebook] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.rem})`,
  };

  const nextPage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === photoAlbum.length - 2 ? 0 : prevIndex === photoAlbum.length - 1 ? 1 : prevIndex + 2));
  };

  const prevPage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photoAlbum.length - 2 : prevIndex === 1 ? photoAlbum.length - 1 : prevIndex - 2));
  };

  return (
    <div style={roomStyle} className='rem-room-container'>
      <div className="room-menu">
        <button className="menu-btn" onClick={() => setShowLifebook(true)}>
          <img src={memory} alt="Writing Down Memory Lane" />
          <span>Writing Down Memory Lane</span>
        </button>
        <button className="menu-btn">
          <img src={fame} alt="Wall of Fame" />
          <span>Wall of Fame</span>
        </button>
      </div>
      {showLifebook && <div className="overlay" />}
      {showLifebook &&
        <div className="lifebook-container">
          <button className="close-btn" onClick={() => setShowLifebook(false)}>X</button>
          <button onClick={nextPage}>Prev Page</button>
          <div className="lifebook">
            <div className='captions'>
              {photoAlbum.slice(currentPhotoIndex, currentPhotoIndex + 2).map(photo => (
                <div className='caption' key={photo.id}>
                  <p>{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="photo-album">
            {photoAlbum.slice(currentPhotoIndex, currentPhotoIndex + 2).map(photo => (
              <div className='photo' key={photo.id}>
                <img src={photo.src} alt={photo.caption} />
              </div>
            ))}
          </div>
          <button onClick={prevPage}>Next Page</button>
        </div>
      }
    </div>
  );
}

export default ReminiscenceRoom;