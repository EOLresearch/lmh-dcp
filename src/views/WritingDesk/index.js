import React from 'react';
import './writingdesk.css';

function WritingDesk() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
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