import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";


const WelcomeScreen = ({ handleNext }) => {
  return (
    <div className='welcome-screen'>
      <div className='content-container'>
        <div className='icon-container'>
          <IoInformationCircleOutline size={100} />
        </div>

        <div className='text-container'>
          <h1>Through this process, you will reflect on your life experiences and collaborate on activities which will allow you to thoughtfully engage with your care partner.</h1>
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default WelcomeScreen;