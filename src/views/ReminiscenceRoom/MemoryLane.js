import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
import Modal from '../../components/Modals/Modal';

const MemoryLane = ({ setShowMemoryLane, handlePhotoClick, photoAlbum, handleAddPhoto }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);
  const [caption, setCaption] = useState('');

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

  const handlePhotoChange = (e) => {
    setNewPhoto(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleAddNewPhoto = () => {
    if (newPhoto) {
      handleAddPhoto({ src: URL.createObjectURL(newPhoto), caption });
      setShowModal(false);
      setNewPhoto(null);
      setCaption('');
    }
  };

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowMemoryLane(false)}><BsXLg /></button>
      <button onClick={prevPage}><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
      <div className="memory-lane">
      <button className="add-photo-btn" onClick={() => setShowModal(true)}>+ Add a Photo</button>
        {albumPages[currentPageIndex]}
      </div>
      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
      
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Add a Photo</h2>
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
        <input type="text" placeholder="Enter caption" value={caption} onChange={handleCaptionChange} />
        <button onClick={handleAddNewPhoto}>Add Photo</button>
      </Modal>
    </div>
  );
};

export default MemoryLane;
