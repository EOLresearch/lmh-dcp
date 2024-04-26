import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './reminiscenceroom.css';
import { useAuth } from "../../auth/AuthContext";

import fame from '../../assets/img/fame.png'
import memory from '../../assets/img/memory.png'

function ReminiscenceRoom() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.rem})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 100px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={roomStyle}>
      <div className="room-menu">
        <button className="menu-btn" >
          <img src={memory} alt="Writing Down Memory Lane" />
          <span>Writing Down Memory Lane</span>
        </button>
        <button className="menu-btn">
          <img src={fame} alt="Wall of Fame" />
          <span>Wall of Fame</span>
        </button>
      </div>
    </div>
  );
}

export default ReminiscenceRoom;
