import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const ResourceDictionary = ({ setShowResourceDictionary, handlePhotoClick, photoAlbum }) => {


  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowResourceDictionary(false)}><BsXLg /></button>
      <div className="resource-dictionary">
      </div>
    </div>
  );
};

export default ResourceDictionary;
