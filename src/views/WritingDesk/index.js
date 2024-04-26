import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './writingdesk.css';
import { useAuth } from "../../auth/AuthContext";

function WritingDesk() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.writ})`,
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

export default WritingDesk;
