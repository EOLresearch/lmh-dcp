import React, { useState } from 'react';
import './setupgallery.css';
import GalleryCard from './GalleryCard';

function SetupGallery({ type, data, onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevClick = () => {
    // If it's the first item, go to the last one. Otherwise, go to the previous item.
    const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    // If it's the last item, go back to the first one. Otherwise, go to the next item.
    const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="setup-gallery">
      <div className="left-arrow" onClick={handlePrevClick}>&#8592;</div>
        <GalleryCard
          cardDataFull={data[currentIndex]}
          key={data[currentIndex].id}
          image={data[currentIndex].image}
          label={data[currentIndex].label}
          onSelect={onSelect}
        />
      <div className="right-arrow" onClick={handleNextClick}>&#8594;</div>
    </div>
  );
}

export default SetupGallery;