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
    <div>
      <h3>Prompt Index</h3>
      {prompts.map((item, index) => (
        <button key={index} onClick={() => handleTitleClick(item.title)} className="title-button">
          {item.title}
        </button>
      ))}
      <button onClick={handleBackToIndex} className="back-button">Back</button>
    </div>
  );

  const renderPrompts = () => {
    const selectedPrompt = prompts.find(item => item.title === selectedTitle);
    return (
      <div className='prompts-panel'>
        <h3>{selectedTitle}</h3>
        {selectedPrompt.prompts.map((prompt) => (
          <div key={prompt.id} className="prompt-item">{prompt.question}</div>
        ))}
        <button onClick={handleBack} className="back-button">Back to Titles</button>
      </div>
    );
  };

  return (
    <div>
      {selectedTitle ? renderPrompts() : renderTitles()}
    </div>
  );
};

export default PromptIndex;
