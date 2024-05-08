import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const TipsTricks = ({ setShowTipsTricks }) => {

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowTipsTricks(false)}><BsXLg /></button>
      <div className="tips-tricks">
      </div>
    </div>
  );
};

export default TipsTricks;
