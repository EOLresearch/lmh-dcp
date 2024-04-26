import { useState, useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";
import { Link } from 'react-router-dom';

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
        <Link to="/reminiscenceroom"><button>Reminiscence Room</button></Link>
        <Link to="/writingdesk"><button>Writing Desk</button></Link>
        <Link to="/readingroom"><button>Reading Room</button></Link>
      </div>
    </div>
  );
}

export default Home;