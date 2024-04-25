import React, { useEffect, useState } from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";



const HouseSlide = ({ handleNext, handlePrev, currentSlide, images }) => {


  return (
    <div className='screen-container'>
      <div className='content-container'>
        <div className='outer-slide-container'>
          <button onClick={handlePrev}><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
          <div className='inner-slide-container'>
            <div className='images-container'>
              <img src={images.ext} alt="Primary" className="primary-image" />
              <div className="secondary-images">
                <img src={images.read} alt="Secondary 1" className="secondary-image" />
                <img src={images.writ} alt="Secondary 2" className="secondary-image" />
                <img src={images.rem} alt="Secondary 3" className="secondary-image" />
              </div>
            </div>
            <div className='text-container'>
              <h2>{currentSlide}</h2>
            </div>

          </div>
          <button onClick={handleNext}><FaLongArrowAltRight color={"gold"} size={100} /> <span>NEXT</span></button>
        </div>
      </div>
      <div className='secondary-copy-container'>
        <IoInformationCircleOutline size={200} />
        <h3>Above are three rooms of your home where you can engage in activities with your care partner. Each room features different activities.</h3>
      </div>
    </div>
  );
};

export default HouseSlide;