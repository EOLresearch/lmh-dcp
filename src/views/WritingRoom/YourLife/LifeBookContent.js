import React, { useRef, useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import PromptIndex from '../PromptIndex';
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
  // const { userData, setUserData } = useAuth();
  const userData = {
    "id": "12345-abcde-67890-fghij",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "user",
    "createdAt": "2023-01-01T00:00:00Z",
    "updatedAt": "2023-01-10T00:00:00Z",
    "lastLogin": "2023-01-09T12:34:56Z",
    "lastPromptCompleted": "adolescence_9",
    "promptInProgress": "",
    "houseSelection": {
      "name": "New-England Colonial",
      "images": {
        "ext": "/static/media/ColonialExt.9d0e94bab90f138da881.png",
        "read": "/static/media/ColonialRead.6e8940a7d971f2535781.png",
        "writ": "/static/media/ColonialWrit.051a3a2704ce3070d3ff.png",
        "rem": "/static/media/ColonialRem.47e827d2e3efe790b894.png"
      }
    }
  }
  const imageInputRef = useRef(null);
  const [currentPromptText, setCurrentPromptText] = useState('');
  console.log(userData)

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

  const findPromptTextById = (promptId) => {
    for (let section in prompts) {
      for (let prompt of prompts[section].prompts) {
        if (prompt.id === promptId) {
          return prompt.question;
        }
      }
    }
    return '';
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = async () => {
    console.log('Saving prompt content...');
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
              <button onClick={handleSave} className="lifebook-button">Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LifeBookContent;
