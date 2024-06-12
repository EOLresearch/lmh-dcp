import React, { useState, useEffect } from 'react';
import './yourlife.css';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useAuth } from '../../../auth/AuthContext';
import axios from 'axios';
import LifeBookCover from './LifeBookCover';
import LifeBookContent from './LifeBookContent';
import { getAllPrompts } from '../yourlifeprompts';

const YourLife = ({ setShowYourLife }) => {
  const { userData, setUserData } = useAuth();
  const [openLifeBook, setOpenLifeBook] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(userData.currentPromptIndex || 0);
  const [viewingIndex, setViewingIndex] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const allPrompts = getAllPrompts();

  // useEffect(() => {
  //   setEditorContent(userData.prompts?.[currentPromptIndex]?.content || "");
  //   setUploadedImage(userData.prompts?.[currentPromptIndex]?.image || null);
  // }, [currentPromptIndex, userData.prompts]);

  const handleNextPrompt = () => {
    if (showWelcome) {
      setShowWelcome(false);
    } else {
      setCurrentPromptIndex((prevIndex) => Math.min(prevIndex + 1, allPrompts.length - 1));
    }
  };

  const handlePreviousPrompt = () => {
    setCurrentPromptIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleViewIndex = () => {
    setViewingIndex(true);
  };

  const handleSelectPromptFromIndex = (index) => {
    setCurrentPromptIndex(index);
    setViewingIndex(false);
  };

  const handleBackToIndex = () => {
    setViewingIndex(false);
  };

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowYourLife(false)}><BsXLg /></button>
      {openLifeBook ? (
        <LifeBookContent
          currentPromptIndex={currentPromptIndex}
          setCurrentPromptIndex={setCurrentPromptIndex}
          setEditorContent={setEditorContent}
          editorContent={editorContent}
          setUploadedImage={setUploadedImage}
          uploadedImage={uploadedImage}
          showWelcome={showWelcome}
          handleNextPrompt={handleNextPrompt}
          handlePreviousPrompt={handlePreviousPrompt}
          handleViewIndex={handleViewIndex}
          handleSelectPromptFromIndex={handleSelectPromptFromIndex}
          handleBackToIndex={handleBackToIndex}
          setShowWelcome={setShowWelcome}
          setOpenLifeBook={setOpenLifeBook}
          allPrompts={allPrompts}
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
