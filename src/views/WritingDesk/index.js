import React from 'react';
import { useState } from 'react';

import './writingdesk.css';

function WritingDesk() {
  const [showGuidlines, setShowGuidlines] = useState(true)
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const guidlines = <div>
    <h1>Expressive Writing Desk</h1>
    <p>Please consider these guidelines as you prepare to make your entry today:</p>
    <ul>
      <li>Find a space that is quiet, private, and free of distraction.</li>
      <li>Find a time to write when you won’t be interrupted.</li>
      <li>Write continuously for at least 15 minutes.</li>
      <li>Don’t worry about spelling or grammar.</li>
      <li>Write only for yourself and the deceased.</li>
      <li>Focus on what is personal and important to you.</li>
    </ul>
  </div>
  return (
    <div className="writing-desk">
      <div className='primary-container'>
        <div className='notebook'>
          <h5>{currentDate}</h5>
          <div className='l-side'>
            <div className="textarea-container">
              <h4>How are you feeling today?</h4>
              <textarea placeholder="Your feelings..."></textarea>
              <button>save</button>
            </div>
            <div className="textarea-container">
              <h4>What made you happy today?</h4>
              <textarea placeholder="Happy moments..."></textarea>
              <button>save</button>
            </div>
            <div className="textarea-container">
              <h4>Anything troubling you?</h4>
              <textarea placeholder="Your concerns..."></textarea>
              <button>save</button>
            </div>
          </div>
          <div className='r-side'>
            <div className="textarea-container">
              <h4>What are your goals for tomorrow?</h4>
              <textarea placeholder="Your goals..."></textarea>
              <button>save</button>
            </div>
            <div className="textarea-container">
              <h4>What are you grateful for today?</h4>
              <textarea placeholder="Gratitude..."></textarea>
              <button>save</button>
            </div>
            <div className="textarea-container">
              <h4>Any special moments to remember?</h4>
              <textarea placeholder="Special moments..."></textarea>
              <button>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritingDesk;