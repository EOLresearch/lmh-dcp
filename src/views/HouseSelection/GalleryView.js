import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import HouseCard from './HouseCard'
import HouseSlide from './HouseSlide'
import { IoInformationCircleOutline } from "react-icons/io5";


import { houses } from '../../assets/img/homes';

const GalleryView = () => {
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState('New-England Colonial');
  const [showGallery, setShowGallery] = useState(false);

  const house = houses.find(house => house.name === currentSlide);

  const { images } = house;

  const handleNext = () => {
    setStarted(true);
  };

  const nextSlide = () => {
    const currentIndex = houses.findIndex(house => house.name === currentSlide);
    const nextIndex = (currentIndex + 1) % houses.length;
    setCurrentSlide(houses[nextIndex].name);
  }

  const lastSlide = () => {
    const currentIndex = houses.findIndex(house => house.name === currentSlide);
    const lastIndex = (currentIndex - 1 + houses.length) % houses.length;
    setCurrentSlide(houses[lastIndex].name);
  }

  const handleShowGallery = () => {
    setShowGallery(true);
  }
  const handleHouseClick = (houseName) => {
    setCurrentSlide(houseName);
    setShowGallery(false);
  }

  if (!started) {
    return (
      <div className='screen-container'>
        <div className='content-container'>
          <div className='icon-container'>
          </div>
          <div className='text-container'>
            <h1>Let's Get Started!</h1>
          </div>
        </div>
        <button onClick={handleNext}><FaLongArrowAltRight color={"gold"} size={100} /> <span>NEXT</span></button>
      </div>
    )
  }

  if (showGallery) {
    return (
      <div className='gallery-container'>
        <div className='house-card-container'>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} onHouseClick={handleHouseClick} />
          ))}
        </div>
        <div className='info-container-2'>
          <IoInformationCircleOutline size={80} />
          <h5>Select a space that you would like to view before confirming your final home selection.</h5>
        </div>

      </div>
    );
  }

  return (
    <HouseSlide handleNext={nextSlide} handlePrev={lastSlide} showGallery={handleShowGallery} currentSlide={currentSlide} images={images} />
  )
};

export default GalleryView;