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
        <Link to="/reminiscenceroom">
          <img src={remroomdoor} alt="Reminiscence Room Door" />
          <span>Reminiscence Room</span>
        </Link>
        <Link to="/writingdesk">
          <img src={writroomdoor} alt="Writing Desk Door" />
          <span>Writing Desk</span>
        </Link>
        <Link to="/readingroom">
          <img src={readingroomdoor} alt="Reading Room Door" />
          <span>Reading Room</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;