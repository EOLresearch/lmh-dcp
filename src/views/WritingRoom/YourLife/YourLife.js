import React, { useState, useEffect } from 'react';
import './yourlife.css';
import 'react-quill/dist/quill.snow.css';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useAuth } from '../../../auth/AuthContext';
import axios from 'axios';
import LifeBookCover from './LifeBookCover';
import LifeBookContent from './LifeBookContent';
import { getAllPrompts, getSectionPrompts } from '../yourlifeprompts';

const YourLife = ({ setShowYourLife }) => {
  const [openLifeBook, setOpenLifeBook] = useState(false);
  const [viewingIndex, setViewingIndex] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const prompts = getSectionPrompts();

  const handleViewIndex = () => {
    setViewingIndex(true);
  };
  const handleBackToIndex = () => {
    setViewingIndex(false);
  };

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowYourLife(false)}><BsXLg /></button>
      {openLifeBook ? (
        <LifeBookContent
          setEditorContent={setEditorContent}
          editorContent={editorContent}
          setUploadedImage={setUploadedImage}
          uploadedImage={uploadedImage}
          showWelcome={showWelcome}
          handleViewIndex={handleViewIndex}
          handleBackToIndex={handleBackToIndex}
          setShowWelcome={setShowWelcome}
          setOpenLifeBook={setOpenLifeBook}
          prompts={prompts}
          viewingIndex={viewingIndex}
        />
      ) : (
        <LifeBookCover
          coverPhoto={coverPhoto}
          setCoverPhoto={setCoverPhoto}
          setOpenLifeBook={setOpenLifeBook}
        />
      )}
    </div>
  );
};

export default YourLife;
