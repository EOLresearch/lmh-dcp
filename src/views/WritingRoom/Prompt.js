import React from 'react';

const Prompt = ({ section, isExpanded, onSelectPrompt, toggleExpand }) => {
  const { title, prompts } = section;

  const handlePromptClick = (prompt) => {
    onSelectPrompt(prompt);
  };

  return (
    <div className="prompt-section">
      <h3 onClick={toggleExpand} className="prompt-title">
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
