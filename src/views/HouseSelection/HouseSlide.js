import React, { useEffect, useState } from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import homeicon from '../../assets/img/homeicon.png'
import { useAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';


const HouseSlide = ({ handleNext, handlePrev, showGallery, house }) => {
  const navigate = useNavigate();
  const { selectHouse } = useAuth();
  const { images } = house;

  const handleHouseSelection =(house)=>{
    selectHouse(house)
    navigate('/');
  }
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
            <div className='title-container'>
              <h2>{house.name}</h2>
            </div>

          </div>
          <button onClick={handleNext}><FaLongArrowAltRight color={"gold"} size={100} /> <span>NEXT</span></button>
        </div>
      </div>
      <div className='secondary-copy-container'>
        <div className='galleryView-btn' onClick={showGallery}>
          <img src={homeicon} alt="gallery home icon" />
          <div className='info-container'>
            <IoInformationCircleOutline size={30} />
            <h5>Click the <b>Home</b> icon to view all available spaces</h5>
          </div>
        </div>
        <div className='wrapper'>
          <IoInformationCircleOutline size={200} />
          <h3>Above are three rooms of your home where you can engage in activities with your care partner. Each room features different activities.</h3>
        </div>
        <div className='select-btn'>
          <button id='select-btn' onClick={()=> handleHouseSelection(house)}><FaLongArrowAltRight color={"green"} size={100} /> <span>SELECT</span></button>
        </div>
      </div>
    </div>
  );
};

export default HouseSlide;