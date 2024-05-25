import React, { useState, useRef } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
import Modal from '../../components/Modals/Modal';

const MemoryLane = ({ setShowMemoryLane, handlePhotoClick, photoAlbum, handleAddPhoto }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);
  const [caption, setCaption] = useState('');
  const fileInputRef = useRef(null);

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

  const clearPhoto = () => {
    setNewPhoto(null);
    setCaption('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
const albumPageCreator = (photos) => {
  const pages = [];
  const photosWithPlaceholder = photos.length % 2 === 0 ? photos : [...photos, { ...photos[photos.length - 1], id: 'placeholder' }];

  for (let i = 0; i < photosWithPlaceholder.length; i += 2) {
    pages.push(
      <div className="photo-album" key={`page-${i}`}>
        <div className='album-page'>
          <div className='album-item'>
            <div className='img-container'>
              <img
                src={photosWithPlaceholder[i].src}
                alt={photosWithPlaceholder[i].caption || ''}
                onClick={() => handlePhotoClick(photosWithPlaceholder[i])}
              />
            </div>
            <div className='caption'>
              <p style={{ visibility: photosWithPlaceholder[i].caption ? 'visible' : 'hidden' }}>
                {photosWithPlaceholder[i].caption ? truncateText(photosWithPlaceholder[i].caption, 80) : ''}
              </p>
            </div>
          </div>
        </div>
        <div className='album-page'>
          <div className='album-item' style={{ visibility: photosWithPlaceholder[i + 1].id === 'placeholder' ? 'hidden' : 'visible' }}>
            <div className='img-container'>
              <img
                src={photosWithPlaceholder[i + 1].src}
                alt={photosWithPlaceholder[i + 1].caption || ''}
                onClick={() => handlePhotoClick(photosWithPlaceholder[i + 1])}
              />
            </div>
            <div className='caption'style={{ visibility: photosWithPlaceholder[i + 1].id === 'placeholder' ? 'hidden' : 'visible' }} >
              <p>{photosWithPlaceholder[i + 1].caption ? truncateText(photosWithPlaceholder[i + 1].caption, 80) : '-'}</p>
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
        <button className="add-photo-btn" onClick={() => setShowModal(true)}>+ Add a Photo</button>
        {albumPages[currentPageIndex]}
      </div>
      <button onClick={nextPage}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Next</span></button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className='photo-upload-modal'>
          <div className='photo-upload-content'>
            <div className='photo-upload-form'>
              <input type="file" accept="image/*" onChange={handlePhotoChange} ref={fileInputRef} />
              <textarea
                placeholder="Enter caption"
                value={caption}
                onChange={handleCaptionChange}
                className="caption-input"
              />
              <button onClick={handleAddNewPhoto}>Add Photo</button>
            </div>
            {newPhoto ? (
              <div className="thumbnail">
                <button id="input-clear" onClick={clearPhoto}><BsXLg /></button>
                <img src={URL.createObjectURL(newPhoto)} alt="Selected Thumbnail" />
              </div>
            ) : (
              <div className="thumbnail">
                <p>Choose a photo to see a preview</p>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MemoryLane;
