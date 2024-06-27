import React, { useState } from 'react';
import { useAuth } from "../../auth/AuthContext";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import ReactQuill from 'react-quill';
import QuillToolBar from './QuillToolBar';
import PromptIndex from './PromptIndex';
import { getInterventionGroupPrompts, getControlGroupPrompts } from './journalprompts';

const Journal = ({ setShowJournal }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [editorContent, setEditorContent] = useState('');
  const [viewingIndex, setViewingIndex] = useState(false);
  const interventionPrompts = getInterventionGroupPrompts();
  const controlPrompts = getControlGroupPrompts();
  const { userData } = useAuth();

  const prevPage = () => {
    console.log('Previous page');
  };

  const nextPage = () => {
    console.log('Next page');
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    console.log('Saving journal content...');
  };

  const handleComplete = () => {
    console.log('Completing journal entry...');
  };

  const handleViewIndex = () => {
    setViewingIndex(true);
  };

  const handleBackToIndex = () => {
    setViewingIndex(false);
  };

  const formats = [
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image', 'color', 'background', 'align'
  ];
  
  const prompts = userData.studyGroup === 'intervention' ? interventionPrompts : controlPrompts;

  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowJournal(false)}><BsXLg /></button>
      <div className="journal-content">
        <div className='journal-inner-container'>
          <div className='journal-left-side'>
            {viewingIndex ? (
              <PromptIndex prompts={prompts} handleBackToIndex={handleBackToIndex} />
            ) : showWelcome ? (
              <div>
                <h3>Welcome to your personal journey feature!</h3>
                <p>This diary is a place for the Care Pair to share your thoughts, feelings, and experiences. It’s designed to help you reflect on your day-to-day life and capture meaningful moments.</p>
              </div>
            ) : (
              <>
                <h2>Test Journal Prompt</h2>
                <div className="prompts-btn-menu">
                  <button onClick={handleViewIndex} className="view-index-button">View Prompts List</button>
                  <button onClick={() => setShowWelcome(true)}>Back</button>
                </div>
              </>
            )}
          </div>
          <div className='journal-right-side'>
            {showWelcome ? (
              <div className='welcome-container-journal'>
                <p>Click the next button below to get started</p>
                <button onClick={() => setShowWelcome(false)} className="next-button">Next</button>
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
    </div>
  );
};

export default Journal;
