// src/views/ReminiscenceRoom/index.js
import { Link } from 'react-router-dom';
import { useState } from 'react';

import lanscape from "../../assets/img/scene1-xl.jpg"
import interior from "../../assets/img/new-rem-room.png"

import windowFrame from '../../assets/img/window_frame_wide-lg.png';
import newremroom from '../../assets/img/new-rem-room.png';

import frame2 from '../../assets/img/frame2.png';
import frame1ornate from '../../assets/img/frame1ornate.png';

import diary from '../../assets/img/diary4-sm.png';
import mems from '../../assets/img/mementos.png';
import stock2 from '../../assets/img/stock2.png'

import Mementos from '../../components/Mementos'; 

import React from 'react';
import './reminiscenceroom.css';



function ReminiscenceRoom() {
  const [showMementos, setShowMementos] = useState(false);
  return (
    <div className="reminiscence-room">
      {showMementos && <Mementos setShowMementos={setShowMementos} />}
      <div className='writing-desk-image-link'>
        <Link to="/writingdesk"><img src={diary} alt="Writing Desk" /></Link>
      </div>
      <div className='mementos-image-link'>
        <img onClick={() => setShowMementos(!showMementos)}  src={mems} alt="Mementos" />
      </div>
      <div className="frame frame2">
        <img className="theFrame" src={frame2} alt="Description of your frame" />
        <img className='theImage' src={stock2} alt="stock2" />
      </div>
      {/* <div className="frame frame-ornate">
        <img src={frame1ornate} alt="Description of your image" />
      </div> */}

    </div>
  );
}

export default ReminiscenceRoom;
