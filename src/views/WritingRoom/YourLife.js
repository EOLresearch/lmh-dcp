import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const prompts = [
  // Example prompts
  "What are your earliest childhood memories?",
  "Describe your school years.",
  "What were your teenage years like?",
];

const YourLife = ({ setShowYourLife }) => {
  const [openLifeBook, setOpenLifeBook] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null); // State for cover photo

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    console.log("Saving content: ", editorContent);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowYourLife(false)}><BsXLg /></button>
      {openLifeBook ? (
        <div className="open-life-book-content">
          {selectedPrompt === null ? (
            <button onClick={() => setOpenLifeBook(false)} id="book-close-button"><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Close</span></button>
          ) : (
            <button onClick={() => setSelectedPrompt(null)} id="book-close-button"><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Back</span></button>
          )}
          <div className='life-book-copy-container'>
            <div className='life-book-left-side'>
              {selectedPrompt === null ? (
                <div>
                  <h2>Welcome to your Life Book</h2>
                  <p>Here is a collection of prompts to help you reflect on different stages of your life.</p>
                </div>
              ) : (
                <div>
                  <h2>{selectedPrompt}</h2>
                </div>
              )}
            </div>
            <div className='life-book-right-side'>
              {selectedPrompt === null ? (
                <div className="prompt-index">
                  {prompts.map((prompt, index) => (
                    <div key={index} onClick={() => setSelectedPrompt(prompt)} className="prompt-item">
                      {prompt}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <ReactQuill
                    value={editorContent}
                    onChange={handleEditorChange}
                    theme="snow"
                  />
                  <button onClick={handleSave} className="save-button">Save</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <button style={{ visibility: 'hidden' }} ><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Close</span></button>
          <div className="book-cover">
            {coverPhoto ? (
              <div className="cover-photo-container">
                <img src={coverPhoto} alt="Cover" className="cover-photo" />
                <button className="edit-button" onClick={() => document.getElementById('cover-photo-input').click()}>Edit Cover Photo</button>
              </div>
            ) : (
              <button className="upload-button" onClick={() => document.getElementById('cover-photo-input').click()}>Upload Cover Photo</button>
            )}
            <input
              type="file"
              id="cover-photo-input"
              style={{ display: 'none' }}
              onChange={handlePhotoUpload}
            />
          </div>
          <button onClick={() => setOpenLifeBook(true)}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Open</span></button>
        </>

      )}
    </div>
  );
};

export default YourLife;
