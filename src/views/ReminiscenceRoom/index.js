// src/views/ReminiscenceRoom/index.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Mementos from '../../components/Mementos';



import React from 'react';
import './reminiscenceroom.css';



function ReminiscenceRoom() {
  const [showMementos, setShowMementos] = useState(false);
  return (
    <div className="reminiscence-room">
      {showMementos && <Mementos setShowMementos={setShowMementos} />}
      <div className='writing-desk-image-link'>
        <Link to="/writingdesk"></Link>
      </div>
      <div className='mementos-image-link'>
        
      </div>
      <div className="frame frame2">

      </div>
      {/* <div className="frame frame-ornate">
        <img src={frame1ornate} alt="Description of your image" />
      </div> */}

    </div>
  );
}

export default ReminiscenceRoom;
