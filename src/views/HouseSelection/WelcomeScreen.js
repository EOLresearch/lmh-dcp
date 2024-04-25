import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";


const WelcomeScreen = ({ handleNext }) => {
  return (
    <div className='screen-container'>
      <div className='content-container'>
        <div className='icon-container'>
          <IoInformationCircleOutline size={100} />
        </div>
        <div className='text-container'>
          <h2>Through this process, you will reflect on your life experiences and collaborate on activities which will allow you to thoughtfully engage with your care partner.</h2>
        </div>
      </div>
      <button onClick={handleNext}><FaLongArrowAltRight color={"gold"} size={100}/> <span>NEXT</span></button>
    </div>
  );
};
export default WelcomeScreen;