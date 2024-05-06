import { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const MemoryLane = ({ setShowMemoryLane, handlePhotoClick, photoAlbum, }) => {
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
      <button className="close-btn" onClick={() => setShowMemoryLane(false)}><BsXLg /></button>
      <button onClick={prevPage}><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
      <div className="memory-lane">
        <div className='captions'>
          {photoAlbum.slice(currentPhotoIndex, currentPhotoIndex + 2).map(photo => (
            <div className='caption' key={photo.id}>
              <p>{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="photo-album">
        {photoAlbum.map((photo, index) => (
          <div className='photo' key={photo.id}>
            <img src={photo.src} alt={photo.caption} onClick={() => handlePhotoClick(photo)} style={{ display: index >= currentPhotoIndex && index < currentPhotoIndex + 2 ? 'block' : 'none' }} />
          </div>
        ))}
      </div>
      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
    </div>
  );
};


export default MemoryLane;
