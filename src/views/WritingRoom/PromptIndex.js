import React, { useState } from 'react';

const PromptIndex = ({ prompts, handleBackToIndex }) => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const isGroupedBySection = Array.isArray(prompts) && prompts.length > 0 && prompts[0].hasOwnProperty('title');

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

  const renderPrompts = (promptList) => (
    <div className='prompts-panel'>
      <h3>{selectedTitle || "Prompts"}</h3>
      {promptList.map((prompt) => (
        <div key={prompt.id} className="prompts-btn">{prompt.question}</div>
      ))}
      <button onClick={handleBackToIndex} className="prompts-btn">Back to Prompt</button>
      {isGroupedBySection && <button onClick={handleBack} className="prompts-btn">Back to Sections</button>}
    </div>
  );

  const promptSection = isGroupedBySection ? prompts.find(item => item.title === selectedTitle) : { prompts };

  return (
    <>
      {isGroupedBySection && !selectedTitle ? renderTitles() : renderPrompts(promptSection.prompts)}
    </>
  );
};

export default PromptIndex;
