import React from 'react';

const PromptIndex = ({ allPrompts, handleSelectPromptFromIndex, handleBackToIndex }) => (
  <div>
    <h3>Prompt Index</h3>
    {allPrompts.map((prompt, index) => (
      <div key={index} onClick={() => handleSelectPromptFromIndex(index)} className="prompt-item">
        {prompt}
      </div>
    ))}
    <button onClick={handleBackToIndex} className="back-button">Back</button>
  </div>
);

export default PromptIndex;
