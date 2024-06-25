import React, { useState } from 'react';

const PromptIndex = ({ prompts, handleBackToIndex }) => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  const handleBack = () => {
    setSelectedTitle(null);
  };

  const renderTitles = () => (
    <div className='prompts-index-panel'>
      {prompts.map((item, index) => (
        <button key={index} onClick={() => handleTitleClick(item.title)} className="prompts-btn">
          {item.title}
        </button>
      ))}
      <button onClick={handleBackToIndex} className="prompts-btn">Back</button>
    </div>
  );

  const renderPrompts = () => {
    const promptSection = prompts.find(item => item.title === selectedTitle);
    return (
      <div className='prompts-panel'>
        <h3>{selectedTitle}</h3>
        {promptSection.prompts.map((prompt) => (
          <div key={prompt.id} className="prompts-btn">{prompt.question}</div>
        ))}
        <button onClick={handleBack} className="prompts-btn">Back to Titles</button>
      </div>
    );
  };

  return (
    <>
      {selectedTitle ? renderPrompts() : renderTitles()}
    </>
  );
};

export default PromptIndex;
