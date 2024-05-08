import { useState, useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";
import { Link } from 'react-router-dom';
import remroomdoor from '../../assets/img/remroomdoor.png'
import readingroomdoor from '../../assets/img/readingroomdoor.png'
import writroomdoor from '../../assets/img/writroomdoor.png'

import './home.css';

function Home() {
  const { userData } = useAuth();
  const { houseSelection } = userData;

  const roomStyle = {
    backgroundImage: `url(${houseSelection.images.ext})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 100px)', // Adjust as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={roomStyle}>
      <div className="room-menu">
        <Link className="menu-btn" to="/reminiscenceroom">
          <img src={remroomdoor} alt="Reminiscence Room Door" />
          <span>Reminiscence Room</span>
        </Link>
        <Link className="menu-btn" to="/writingroom">
          <img src={writroomdoor} alt="Writing Room Door" />
          <span>Writing Room</span>
        </Link>
        <Link className="menu-btn" to="/readingroom">
          <img src={readingroomdoor} alt="Reading Room Door" />
          <span>Reading Room</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;