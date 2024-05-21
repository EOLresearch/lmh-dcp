import { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const MemoryLane = ({ setShowMemoryLane, handlePhotoClick, handlePhotoUpload, photoAlbum }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPage = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex + 2;
      return newIndex >= photoAlbum.length ? 0 : newIndex;
    });
  };

  const prevPage = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex - 2;
      return newIndex < 0 ? (photoAlbum.length % 2 === 0 ? photoAlbum.length - 2 : photoAlbum.length - 1) : newIndex;
    });
  };

  const getPhotosToDisplay = () => {
    const photosToDisplay = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentPhotoIndex + i) % photoAlbum.length;
      photosToDisplay.push(photoAlbum[index]);
    }
    return photosToDisplay;
  };

  const photosToDisplay = getPhotosToDisplay();

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowMemoryLane(false)}><BsXLg /></button>
      <button onClick={prevPage}><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
      <div className="memory-lane">
        <div className="photo-album">
          {photoAlbum.length === 0 ? (
            <div className='album-page'>
              <div className='upload-prompt'>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handlePhotoUpload(e.target.files[0])}
                />
              </div>
            </div>
          ) : (
            photosToDisplay.map((photo, index) => (
              <div className='album-page' key={photo.id}>
                <div className='photo'>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    onClick={() => handlePhotoClick(photo)}
                  />
                </div>
                <div className='caption'>
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
    </div>
  );
};

export default MemoryLane;
