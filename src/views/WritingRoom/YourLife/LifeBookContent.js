import React, { useRef, useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import PromptIndex from './PromptIndex';
import ReactQuill from 'react-quill';
import QuillToolBar from './QuillToolBar';
import { useAuth } from '../../../auth/AuthContext';
import axios from 'axios';

// Helper functions defined outside the component
const findPromptTextById = (id, prompts) => {
  for (let item of prompts) {
    for (let prompt of item.prompts) {
      if (prompt.id === id) {
        return prompt.question;
      }
    }
  }
  return '';
};

const getNextPromptId = (lastCompletedId, prompts) => {
  const { currentListIndex, currentPromptIndex } = findCurrentPromptIndex(lastCompletedId, prompts);

  if (currentPromptIndex === -1 || currentListIndex === -1) {
    return prompts[0].prompts[0].id;
  }

  if (currentPromptIndex + 1 < prompts[currentListIndex].prompts.length) {
    return prompts[currentListIndex].prompts[currentPromptIndex + 1].id;
  }

  if (currentListIndex + 1 < prompts.length) {
    return prompts[currentListIndex + 1].prompts[0].id;
  }

  return null;
};

const findCurrentPromptIndex = (lastCompletedId, prompts) => {
  for (let i = 0; i < prompts.length; i++) {
    const promptList = prompts[i].prompts;
    for (let j = 0; j < promptList.length; j++) {
      if (promptList[j].id === lastCompletedId) {
        return { currentListIndex: i, currentPromptIndex: j };
      }
    }
  }
  return { currentListIndex: -1, currentPromptIndex: -1 };
};

const LifeBookContent = ({
  showWelcome,
  handleViewIndex,
  handleBackToIndex,
  setShowWelcome,
  setOpenLifeBook,
  prompts,
  viewingIndex,
  editorContent,
  setEditorContent,
  uploadedImage,
  setUploadedImage
}) => {
  const { userData, setUserData } = useAuth();
  const imageInputRef = useRef(null);
  const [currentPromptText, setCurrentPromptText] = useState('');

  useEffect(() => {
    if (userData) {
      if (userData.promptInProgress) {
        const promptText = findPromptTextById(userData.promptInProgress, prompts);
        setCurrentPromptText(promptText);
      } else if (userData.lastPromptCompleted) {
        const nextPromptId = getNextPromptId(userData.lastPromptCompleted, prompts);
        const nextPromptText = findPromptTextById(nextPromptId, prompts);
        setCurrentPromptText(nextPromptText);
      } else {
        const firstPrompt = prompts[0].prompts[0].question;
        setCurrentPromptText(firstPrompt);
      }
    }
  }, [userData]);


  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = async () => {
    console.log('Saving prompt content...');
  };
  const handleComplete = async () => {
    console.log('Completing prompt...');
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      // Mocking the API call
      setTimeout(() => {

        const mockResponse = {
          data: {
            imageUrl: URL.createObjectURL(file), // Using a blob URL for the uploaded image
          },
        };
        setUploadedImage(mockResponse.data.imageUrl);
      }, 1000); // Simulating network latency
    }
  };

  const formats = [
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image', 'color', 'background', 'align'
  ];


  return (
    <div className="open-life-book-content">
      <button onClick={() => setOpenLifeBook(false)} id="book-close-button"><FaLongArrowAltLeft color={"gold"} size={100} /><span>Close</span></button>
      <div className='life-book-copy-container'>
        <div className='life-book-left-side'>
          {viewingIndex ? (
            <PromptIndex
              prompts={prompts}
              handleBackToIndex={handleBackToIndex}
            />
          ) : (
            showWelcome ? (
              <div>
                <h3>Welcome to the "This is Your Life" feature!</h3>
                <p>This tool allows you to document and celebrate the life story of the person you are caring for. By interviewing them and using structured prompts, you will create a comprehensive and cherished biography that highlights major milestones and experiences.</p>
              </div>
            ) : (
              <>
                <h2>{currentPromptText}</h2>
                <button onClick={() => imageInputRef.current.click()} className="upload-button">Upload Image</button>
                <input
                  type="file"
                  ref={imageInputRef}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-thumbnail" />}
                <div className="prompts-btn-menu">
                  <button onClick={handleViewIndex} className="view-index-button">View Prompts List</button>
                  <button onClick={()=>setShowWelcome(true)}>Back</button>
                </div>
              </>
            )
          )}
        </div>
        <div className='life-book-right-side'>
          {showWelcome ? (
            <div className='welcome-container'>
              <p>Click the next button below to get started</p>
              {/* <p>We encourage you to upload photos where suitable to help illustrate your story.</p> */}
              <button onClick={()=>setShowWelcome(false)} className="next-button">Next</button>
            </div>
          ) : (
            <div className='quill-container'>
              <QuillToolBar />
              <div className='quill-input-wrapper'>
                <ReactQuill
                  theme='snow'
                  value={editorContent}
                  onChange={handleEditorChange}
                  modules={{ toolbar: { container: "#toolbar" } }}
                  formats={formats}
                  className='custom-quill-editor'
                  placeholder='Click here to start writing...'
                />
              </div>
              <div className='quill-button-container'>
              <button onClick={handleSave} className="lifebook-button">Save</button>
              <button onClick={handleComplete} className="lifebook-button">Complete Prompt</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LifeBookContent;
