import React from 'react';
import './readingroom.css';
import { useAuth } from "../../auth/AuthContext";

function ReadingRoom() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.read})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 100px)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={roomStyle}>

    </div>
  );
}

export default ReadingRoom;
