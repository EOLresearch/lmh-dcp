import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";


const InstructionsScreen = ({ handleNext }) => {
  return (
    <div className='screen-container'>
      <div className='content-container'>
        <div className='icon-container'>
          <IoInformationCircleOutline size={100} />
        </div>
        <div className='text-container'>
          <h1>To begin, select a space that resonates most with you. As you continue on your journey of reflection, you will build a Living Memory Home together that will always be here for you.</h1>    
        </div>
      </div>
      <button onClick={handleNext}><FaLongArrowAltRight color={"gold"} size={100} /> <span>NEXT</span></button>
    </div>
  );
};

export default InstructionsScreen;