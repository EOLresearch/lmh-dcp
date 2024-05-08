import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const InformationStation = ({ setShowInformationStation }) => {

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowInformationStation(false)}><BsXLg /></button>
      <div className="information-station">
      </div>
    </div>
  );
};

export default InformationStation;
