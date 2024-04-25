import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import HouseCard from './HouseCard'
import HouseSlide from './HouseSlide'

import { houses } from '../../assets/img/homes';

const GalleryView = () => {
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState('New-England Colonial')

  const house = houses.find(house => house.name === currentSlide);
  
  const { images } = house;

  const handleNext = () => {
    setStarted(true)
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

  if (started === false) {
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

  if (currentSlide === "") {
    return (
      <div>
        <h1>Gallery</h1>
      </div>
    );
  }

  return (
    <HouseSlide handleNext={nextSlide} handlePrev={lastSlide} currentSlide={currentSlide} images={images} />
  )

};

export default GalleryView;