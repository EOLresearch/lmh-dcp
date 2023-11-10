import React, { useState } from 'react';
import './photoalbum.css';

const PhotoAlbum = ({ photos, setShowPhotoAlbum }) => {
  const [newPhotos, setNewPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNewPhotos = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newPhotoUrls = selectedFiles.map(file => URL.createObjectURL(file));
    setNewPhotos(prevPhotos => [...prevPhotos, ...newPhotoUrls]);
  };

  const allPhotos = [...photos, ...newPhotos];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null);
  };

  if (!allPhotos.length) {
    return (
      <div className="photo-album">
        <p>No photos available</p>
      </div>
    );
  }

  return (
    <div className="photo-album">
      <div className='input-container'>
        <p>Add photos here</p>
        <input
          type="file"
          multiple
          onChange={handleNewPhotos}
          id="fileInput"
          style={{ display: 'none' }}
        />
        <label htmlFor="fileInput" className="custom-file-upload">Upload Photos</label>
      </div>
      <button onClick={() => setShowPhotoAlbum(false)}>Close</button>
      <div className="photo-grid">
        {allPhotos.map((photo, index) => (
          <div key={index} className="photo-item" onClick={() => handleImageClick(photo)}>
            <img src={photo} alt={`Photo ${index}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img src={selectedImage} alt="Fullscreen" />
          <button>Frame this photo?</button>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbum;
