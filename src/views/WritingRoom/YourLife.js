import React, { useState, useRef } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import lifebook from '../../assets/img/lifebook.png';
import lifebook2 from '../../assets/img/lifebook2.png';
import Prompt from './Prompt'; // Import the Prompt component

const prompts = {
  earlyChildhood: [
    "Where were you born?",
    "What are some of your earliest childhood memories?",
    // Add all other prompts for early childhood...
  ],
  adolescence: [
    "How would you describe yourself as a teenager?",
    "Can you share a funny story from your adolescence?",
    // Add all other prompts for adolescence...
  ],
  // Define other life stages similarly...
};

const YourLife = ({ setShowYourLife }) => {
  const [openLifeBook, setOpenLifeBook] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const coverPhotoInputRef = useRef(null);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    console.log("Saving content: ", editorContent);
    // Implement save logic here...
  };

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

  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
  };

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowYourLife(false)}><BsXLg /></button>
      {openLifeBook ? (
        <div className="open-life-book-content">
          <button onClick={() => setOpenLifeBook(false)} id="book-close-button"><FaLongArrowAltLeft color={"gold"} size={100}/> <span>Close</span></button>
          <div className='life-book-copy-container'>
            <div className='life-book-left-side'>
              {selectedPrompt === null ? (
                <div>
                  <h2>Welcome to your Life Book</h2>
                  <p>Here is a collection of prompts to help you reflect on different stages of your life.</p>
                  <p>We have defined 5 general life-stages to the right where we have organized the prompts to help get you started.</p>
                  <p>When you are complete, you will be able to download a PDF copy of your Life Book.</p>
                </div>
              ) : (
                <div>
                  <h2>{selectedPrompt}</h2>
                  <button onClick={() => setSelectedPrompt(null)} className="back-button">Back</button>
                </div>
              )}
            </div>
            <div className='life-book-right-side'>
              {selectedPrompt === null ? (
                <div className="life-stage-prompts">
                  {Object.keys(prompts).map((lifeStage, index) => (
                    <Prompt 
                      key={index} 
                      title={lifeStage.replace(/([A-Z])/g, ' $1').trim()} 
                      prompts={prompts[lifeStage]} 
                      onSelectPrompt={handlePromptSelect} 
                    />
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
          {coverPhoto ? (
            <>
              <img src={coverPhoto} alt="Cover" className="cover-photo"/>
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
          >
          </div>
          <button onClick={() => setOpenLifeBook(true)}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Open</span></button>
        </>
      )}
    </div>
  );
};

export default YourLife;
