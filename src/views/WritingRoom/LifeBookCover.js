import React, { useRef } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import lifebook from '../../assets/img/lifebook.png';
import lifebook2 from '../../assets/img/lifebook2.png';

const LifeBookCover = ({ coverPhoto, setCoverPhoto, setOpenLifeBook }) => {
  const coverPhotoInputRef = useRef(null);

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {coverPhoto ? (
        <>
          <img src={coverPhoto} alt="Cover" className="cover-photo" />
          <button onClick={() => coverPhotoInputRef.current.click()} className="edit-cover-button">Edit Cover Photo</button>
        </>
      ) : (
        <button onClick={() => coverPhotoInputRef.current.click()} className="add-cover-button">Add Cover Photo</button>
      )}
      <input
        type="file"
        ref={coverPhotoInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleCoverPhotoChange}
      />
      <div
        className="book-cover"
        style={{
          backgroundImage: `url(${coverPhoto ? lifebook2 : lifebook})`
        }}
      ></div>
      <button onClick={() => setOpenLifeBook(true)}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Open</span></button>
    </>
  );
};

export default LifeBookCover;
