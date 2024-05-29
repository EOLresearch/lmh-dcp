import React, { useState } from 'react';

const Prompt = ({ title, prompts, onSelectPrompt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePromptClick = (prompt) => {
    onSelectPrompt(prompt);
  };

  return (
    <div className="prompt-section">
      <h3 onClick={handleToggle} className="prompt-title">
        {title}
      </h3>
      {isExpanded && (
        <div className="prompt-list">
          {prompts.map((prompt, index) => (
            <div key={index} onClick={() => handlePromptClick(prompt)} className="prompt-item">
              {prompt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Prompt;
