import './modals.css';
import React from 'react';
import Modal from './Modal';
import AboutUs from './AboutUs';
import ContactInfo from './ContactInfo';
import DementiaCareResources from './DementiaCareResources';

function Modals({ modalState, toggleModal }) {
  return (
    <>
      <Modal show={modalState.showAboutUs} onClose={() => toggleModal('showAboutUs')}>
        <AboutUs />
      </Modal>
      <Modal show={modalState.showResources} onClose={() => toggleModal('showResources')}>
        <DementiaCareResources />
      </Modal>
      <Modal show={modalState.showContact} onClose={() => toggleModal('showContact')}>
        <ContactInfo />
      </Modal>
    </>
  );
}

export default Modals;
