import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const WallOfFame = ({ setShowWallOfFame, handlePhotoClick, photoAlbum }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photoAlbum.length);
  };

  const prevPage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photoAlbum.length) % photoAlbum.length);
  };

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowWallOfFame(false)}><BsXLg /></button>
      <button onClick={prevPage}><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
      <div className="wall-of-fame">
        <div className='wall-of-fame-photo' key={photoAlbum[currentPhotoIndex].id}>
          <img src={photoAlbum[currentPhotoIndex].src} alt={photoAlbum[currentPhotoIndex].caption} onClick={() => handlePhotoClick(photoAlbum[currentPhotoIndex])} />
          <p>{photoAlbum[currentPhotoIndex].caption}</p>
        </div>
      </div>
      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
    </div>
  );
};

export default WallOfFame;
