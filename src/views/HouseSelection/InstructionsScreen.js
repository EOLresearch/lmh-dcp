import React from 'react';

const InstructionsScreen = ({ handleNext }) => {
  return (
    <div>
      <h1>instructions</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default InstructionsScreen;