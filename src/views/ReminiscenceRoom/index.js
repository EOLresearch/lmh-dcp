// src/views/ReminiscenceRoom/index.js
import { Link } from 'react-router-dom';

import lanscape from "../../assets/img/scene1-xl.jpg"
import interior from "../../assets/img/new-rem-room.png"

import windowFrame from '../../assets/img/window_frame_wide-lg.png';
import newremroom from '../../assets/img/new-rem-room.png';

import diary from '../../assets/img/diary4-sm.png';
import mementos from '../../assets/img/mementos.png';

import React from 'react';
import './reminiscenceroom.css';

function ReminiscenceRoom() {
  return (
    <div className="reminiscence-room">
      <div className='writing-desk-image-link'>
        <Link to="/writingdesk"><img src={diary} alt="Writing Desk" /></Link>
      </div>
      <div className='mementos-image-link'>
        <img onClick={null} src={mementos} alt="Mementos" />
      </div>
    </div>
  );
}

export default ReminiscenceRoom;
