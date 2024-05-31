import React, { useRef } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import PromptIndex from './PromptIndex';
import PromptView from './PromptView';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAuth } from '../../auth/AuthContext';
import axios from 'axios';

const LifeBookContent = ({
  currentPromptIndex,
  setCurrentPromptIndex,
  showWelcome,
  handleNextPrompt,
  handlePreviousPrompt,
  handleViewIndex,
  handleSelectPromptFromIndex,
  handleBackToIndex,
  setShowWelcome,
  setOpenLifeBook,
  allPrompts,
  viewingIndex,
  editorContent,
  setEditorContent,
  uploadedImage,
  setUploadedImage
}) => {
  const { userData, setUserData } = useAuth();
  const imageInputRef = useRef(null);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = async () => {
    const updatedUserData = {
      ...userData,
      prompts: {
        ...userData.prompts,
        [currentPromptIndex]: {
          content: editorContent,
          image: uploadedImage,
        }
      },
      currentPromptIndex
    };
    setUserData(updatedUserData);

    try {
      await axios.post('http://localhost:3001/api/saveProgress', updatedUserData);
      console.log("Content saved");
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      // Mocking the API call
      setTimeout(() => {
        // Simulate a response
        const mockResponse = {
          data: {
            imageUrl: URL.createObjectURL(file), // Using a blob URL for the uploaded image
          },
        };
        setUploadedImage(mockResponse.data.imageUrl);
      }, 1000); // Simulating network latency
    }
  };
  
  // const handleImageChange = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('file', file);
      
  //     try {
  //       const response = await axios.post('http://localhost:3001/api/uploadImage', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data'
  //         }
  //       });
  //       setUploadedImage(response.data.imageUrl);
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   }
  // };

  return (
    <div className="open-life-book-content">
      <button onClick={() => setOpenLifeBook(false)} id="book-close-button"><FaLongArrowAltLeft color={"gold"} size={100} /><span>Close</span></button>
      <div className='life-book-copy-container'>
        <div className='life-book-left-side'>
          {viewingIndex ? (
            <PromptIndex
              allPrompts={allPrompts}
              handleSelectPromptFromIndex={handleSelectPromptFromIndex}
              handleBackToIndex={handleBackToIndex}
            />
          ) : (
            showWelcome ? (
              <div>
                <h3>Welcome to the "This is Your Life" feature!</h3>
                <p>This tool allows you to document and celebrate the life story of the person you are caring for. By interviewing them and using structured prompts, you will create a comprehensive and cherished biography that highlights major milestones and experiences.</p>
              </div>
            ) : (
              <div>
                <h2>{allPrompts[currentPromptIndex]}</h2>
                <button onClick={() => imageInputRef.current.click()} className="upload-button">Upload Image</button>
                <input
                  type="file"
                  ref={imageInputRef}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-thumbnail" />}
              </div>
            )
          )}
        </div>
        <div className='life-book-right-side'>
          {showWelcome ? (
            <div>
              <h3>On the next page you will be met with the first prompt for your Life Book.</h3>
              <p>We encourage you to upload photos where suitable to help illustrate your story.</p>
              <button onClick={handleNextPrompt} className="next-button">Next</button>
            </div>
          ) : (
            <div>
              <ReactQuill
                value={editorContent}
                onChange={handleEditorChange}
                theme="snow"
              />
              <button onClick={handleSave} className="save-button">Save</button>
              {currentPromptIndex > 0 && <button onClick={handlePreviousPrompt} className="back-button">Previous</button>}
              {currentPromptIndex < allPrompts.length - 1 && <button onClick={handleNextPrompt} className="next-button">Next</button>}
              <button onClick={handleViewIndex} className="view-index-button">View Index</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LifeBookContent;
