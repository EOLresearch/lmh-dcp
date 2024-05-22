import { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const MemoryLane = ({ setShowMemoryLane, handlePhotoClick, handlePhotoUpload, photoAlbum }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    setCurrentPageIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= albumPages.length ? 0 : newIndex;
    });
  };

  const prevPage = () => {
    setCurrentPageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? albumPages.length - 1 : newIndex;
    });
  };

  const albumPageCreator = (photos) => {
    const pages = [];
    const photosWithPlaceholder = photos.length % 2 === 0 ? photos : [...photos, { ...photos[photos.length - 1], id: 'placeholder' }];

    for (let i = 0; i < photosWithPlaceholder.length; i += 2) {
      pages.push(
        <div className="photo-album" key={`page-${i}`}>
          <div className='album-page'>
            <div className='photo'>
              <img
                src={photosWithPlaceholder[i].src}
                alt={photosWithPlaceholder[i].caption}
                onClick={() => handlePhotoClick(photosWithPlaceholder[i])}
              />
              <div className='caption'>
                <p>{photosWithPlaceholder[i].caption}</p>
              </div>
            </div>
          </div>
          <div className='album-page'>
            <div className='photo' style={{ visibility: photosWithPlaceholder[i + 1].id === 'placeholder' ? 'hidden' : 'visible' }}>
              <img
                src={photosWithPlaceholder[i + 1].src}
                alt={photosWithPlaceholder[i + 1].caption}
                onClick={() => handlePhotoClick(photosWithPlaceholder[i + 1])}
              />
              <div className='caption'>
                <p>{photosWithPlaceholder[i + 1].caption}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return pages;
  };

  const albumPages = albumPageCreator(photoAlbum);

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowMemoryLane(false)}><BsXLg /></button>
      <button onClick={prevPage}><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
      <div className="memory-lane">
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
          albumPages[currentPageIndex]
        )}
      </div>
      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
    </div>
  );
};

export default MemoryLane;
