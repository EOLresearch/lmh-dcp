import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './reminiscenceroom.css';
import { useAuth } from "../../auth/AuthContext";

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
    <div style={roomStyle} >

    </div>
  );
}

export default ReminiscenceRoom;
