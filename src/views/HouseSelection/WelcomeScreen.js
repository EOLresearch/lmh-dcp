import React from 'react';

const WelcomeScreen = ({ handleNext }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default WelcomeScreen;