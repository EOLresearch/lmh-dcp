import React, { useState } from 'react';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import YourLife from '../YourLife/YourLife'
import './mementos.css';


function Mementos({setShowMementos}) {
  const [activeView, setActiveView] = useState('mementosContent');

  const photoArr = []
  const mementosContent = (
    <div className="mementos-content">
        <div className="left-side">
          <h2>Welcome to your Mementos</h2>
          <p>
            This book is a place where you can share your life stories and memories. We'll guide you through a narrative exercise to create a meaningful record of your experiences.
          </p>
          <p>Below you can access your Photo Album and choose photos to frame in the Reminiscence Room. </p>
          <p>Any photos you upload in "This is Your Life" guided autobiography will be stored in this photo album as well.</p>

          <div onClick={() => setActiveView('photoAlbum')} className='photo-album-callout'>
            {/* <img src={MhLogo} alt="photo album"/> */}
            <p>Photo Album</p>
          </div>
        </div>
        <div className="right-side">
          <div className='your-life-callout-container' onClick={() => setActiveView('yourLife')}>
            {/* <img src={sunset} alt="this is your life feature image"/> */}
            <h4>This is Your Life</h4>
            <p>Reflect on the stories that define you. Create and preserve your life's narrative with autobiographical prompts and journaling.</p>
          </div>
        </div>
      </div>
  )

  let content;
  switch (activeView) {
    case 'photoAlbum':
      content = <PhotoAlbum photos={photoArr} setShowPhotoAlbum={() => setActiveView('mementosContent')} />;
      break;
    case 'yourLife':
      content = <YourLife setShowYourLife={() => setActiveView('mementosContent')} />;
      break;
    default:
      content = mementosContent;
  }

  return (
    <div className="mementos-container">

      {content}
      {activeView === 'mementosContent' && (
        <button onClick={() => setShowMementos(false)}>Back</button>
      )}
    </div>
  );
}

export default Mementos;