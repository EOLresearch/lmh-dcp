// src/views/Home/index.js
import { FaDoorOpen } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { GiBookmark } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className='info-box'>
        <h2>Welcome Home.</h2>
        <p>
          Welcome back Joe, This is your Living Memory Home.
        </p>
        <p>
          A quaint and cozy cottage full of light colors with windows that let in bright sunlight and fresh air. When the surrounding trees are painted in autumn colors, it is a perfect moment to take a breath from your daily routine, slow down, and embrace nature.
        </p>
        <div className='icon-btn-container'>
          <div className='icon-btn'>
            <span className='icon'>
              <FaDoorOpen />
            </span>
            <p>Reminisence Room</p>
          </div>
          <div className='icon-btn'>
            <span className='icon'>
              <TfiWrite />
            </span>
            <p>Writing Desk</p>
          </div>
          <div className='icon-btn'>
            <span className='icon'>
              <GiBookmark />
            </span>
            <p>Reading Room</p>
          </div>
          <div className='icon-btn'>
            <span className='icon'>
              <AiOutlineUser />
            </span>
            <p>My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
