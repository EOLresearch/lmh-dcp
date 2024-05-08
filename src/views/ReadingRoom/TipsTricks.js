import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const TipsTricks = ({ setShowTipsTricks, handlePhotoClick, photoAlbum }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photoAlbum.length);
  };

  const prevPage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photoAlbum.length - 1 : prevIndex - 1));
  };

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowTipsTricks(false)}><BsXLg /></button>
      <button onClick={prevPage}><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
      <div className="tips-tricks">
        <div className='tips-tricks-photo' key={photoAlbum[currentPhotoIndex].id}>
          <img src={photoAlbum[currentPhotoIndex].src} alt={photoAlbum[currentPhotoIndex].caption} onClick={() => handlePhotoClick(photoAlbum[currentPhotoIndex])} />
          <p>{photoAlbum[currentPhotoIndex].caption}</p>
        </div>
      </div>
      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
    </div>
  );
};

export default TipsTricks;
