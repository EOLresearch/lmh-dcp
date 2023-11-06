import React, { useState } from 'react';
import './mementos.css';

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
      <div className="mementos-content">
        <div className="intro-text">
          <h2>Welcome to Mementos</h2>
          <p>
            Mementos is a place where you can share your life stories and memories. We'll guide you through a narrative exercise to create a meaningful record of your experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mementos;
