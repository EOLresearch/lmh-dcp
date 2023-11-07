import React, { useState } from 'react';
import './mementos.css';
import openbook from '../../assets/img/openbook.png';

function Mementos() {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const prompts = [
    'Tell me about your favorite childhood memory.',
    'Share a special moment from your school days.',
    'Describe a memorable family gathering.',
  ];

  const handleNextPrompt = () => {
    if (currentPrompt < prompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
    } else {
      // Handle completion or navigate to the next step
    }
  };

  return (
    <div className="mementos-container">
      <img src={openbook} alt="Mementos" />
      <div className="mementos-content">
        <div className="left-side">
          <h2>Welcome to your Mementos</h2>
          <p>
            This book is a place where you can share your life stories and memories. We'll guide you through a narrative exercise to create a meaningful record of your experiences.
          </p>
        </div>
        <div className="right-side">
          <h3>Today's Prompt</h3>
          <p>{prompts[currentPrompt]}</p>
          <button onClick={handleNextPrompt}>Next</button>
          </div>
      </div>
    </div>
  );
}

export default Mementos;
