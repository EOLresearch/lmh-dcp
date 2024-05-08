import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Journal = ({ setShowJournal, handlePhotoClick, photoAlbum }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPage = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex + 2;
      return newIndex >= photoAlbum.length ? newIndex - photoAlbum.length : newIndex;
    });
  };

  const prevPage = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex - 2;
      return newIndex < 0 ? newIndex + photoAlbum.length : newIndex;
    });
  };
  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowJournal(false)}><BsXLg /></button>
      <button onClick={prevPage}><FaLongArrowAltLeft color={"gold"} size={100} /><span>Back</span></button>
      <div className="journal-content">
        <div className='journal-inner-container'>
          <div className='journal-left-side'>

          </div>
          <div className='journal-right-side'>
          </div>
        </div>

      </div>

      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
    </div>
  );
};

export default Journal;
