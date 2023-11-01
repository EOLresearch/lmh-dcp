import React from 'react';
import './message-overlay.css';
import scroll from '../../assets/img/message_board2_horizontal-sm.png'

function MessageOverlay({ message, onNext }) {
  return (
    <div className="message-overlay">
      <div className="scroll">
        <img src={scroll} alt="scroll" className="scroll-image" />
        <div className="message-content">
          <p>{message}</p>
          <button onClick={onNext}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default MessageOverlay;