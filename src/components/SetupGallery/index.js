import React from 'react';
import './setupgallery.css';
import GalleryCard from './GalleryCard'; // Assuming GalleryCard is in the same directory

function SetupGallery({ type, items, onSelect }) {
  return (
    <div className="setup-gallery">
      {items.map(item => (
        <GalleryCard
          key={item.id}
          image={item.image}
          label={item.label}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}

export default SetupGallery;