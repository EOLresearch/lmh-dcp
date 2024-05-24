import React from 'react';
import './modals.css';
import { BsXLg } from 'react-icons/bs';

const Modal = ({ show, children, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}><BsXLg /></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
