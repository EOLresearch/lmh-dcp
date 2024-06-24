import React from 'react';

const PromptIndex = ({ prompts, handleBackToIndex }) => (
  <div>
    <h3>Prompt Index</h3>
   
    <button onClick={handleBackToIndex} className="back-button">Back</button>
  </div>
);

export default PromptIndex;
