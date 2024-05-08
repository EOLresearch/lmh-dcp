import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";


const YourLife = ({ setShowYourLife, handlePhotoClick, photoAlbum }) => {
  const [openLifeBook, setOpenLifeBook] = useState(false);


  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowYourLife(false)}><BsXLg /></button>
      {openLifeBook ? (
        <div className="open-life-book-content">
          <button onClick={() => setOpenLifeBook(false)} id="book-close-button"><FaLongArrowAltLeft color={"gold"} size={100}/> <span>Close</span></button>
          <div className='life-book-copy-container'>
            <div className='life-book-left-side'>
                
            </div>
            <div className='life-book-right-side'>
            </div>
          </div>

        </div>
      ) : (
        <>
          <button style={{ visibility: 'hidden' }} ><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Close</span></button>
          <div className="your-life" onClick={() => setOpenLifeBook(true)}>
          </div>
          <button onClick={() => setOpenLifeBook(true)}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Open</span></button>
        </>
      )}
    </div>
  );
};

export default YourLife;
