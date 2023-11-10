import React, { useState } from 'react';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import './mementos.css';
import openbook from '../../assets/img/openbook.png';
import MhLogo from '../../assets/img/MH_logo_watercolor_bg-sm.png'
import sunset from '../../assets/img/sunset.png'

import stock1 from '../../assets/img/stock1.png';
import stock2 from '../../assets/img/stock2.png';
import stock3 from '../../assets/img/stock3.png';
import stock4 from '../../assets/img/stock4.png';
import stock5 from '../../assets/img/stock5.png';

function Mementos({setShowMementos}) {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [showPhotoAlbum, setShowPhotoAlbum] = useState(false)
  // const prompts = [
  //   'Tell me about your favorite childhood memory.',
  //   'Share a special moment from your school days.',
  //   'Describe a memorable family gathering.',
  // ];

  // const handleNextPrompt = () => {
  //   if (currentPrompt < prompts.length - 1) {
  //     setCurrentPrompt(currentPrompt + 1);
  //   } else {
  //   }
  // };

  const photoArr = [stock1, stock2, stock3, stock4, stock5]
  const mementosContent = (
    <div className="mementos-content">
        <div className="left-side">
          <h2>Welcome to your Mementos</h2>
          <p>
            This book is a place where you can share your life stories and memories. We'll guide you through a narrative exercise to create a meaningful record of your experiences.
          </p>
          <p>Below you can access your Photo Album and choose photos to frame in the Reminiscence Room. </p>
          <p>Any photos you upload in "This is Your Life" guided autobiography will be stored in this photo album as well.</p>

          <div onClick={()=>setShowPhotoAlbum(true)} className='photo-album-callout'>
            <img src={MhLogo} alt="photo album"/>
            <p>Photo Album</p>
          </div>
        </div>
        <div className="right-side">
          <div className='your-life-callout-container'>
            <img src={sunset} alt="this is your life feature image"/>
            <h4>This is Your Life</h4>
            <p>Reflect on the stories that define you. Create and preserve your life's narrative with autobiographical prompts and journaling.</p>
          </div>
        </div>
      </div>
  )

  return (
    <div className="mementos-container">
      <img className="openbook" src={openbook} alt="Mementos" />
      {showPhotoAlbum ? <PhotoAlbum photos={photoArr} setShowPhotoAlbum={setShowPhotoAlbum}/> : mementosContent }
      <button style={{ display: showPhotoAlbum ? 'none' : 'block' }} onClick={()=> setShowMementos(false)}>Back</button>
    </div>
  );
}

export default Mementos;
