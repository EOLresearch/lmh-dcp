// src/views/Login/RegistrationForm.js

import React, { useState } from 'react';
import InputWithIcon from './InputWithIcon';
import logo from '../../assets/img/lmh-dcp-whitebg.png';

const RegistrationForm = ({ setScreen }) => {
  const [caregiverFirstName, setCaregiverFirstName] = useState("");
  const [caregiverLastName, setCaregiverLastName] = useState("");
  const [caregiverEmail, setCaregiverEmail] = useState("");
  const [caregiverPassword, setCaregiverPassword] = useState("");
  const [caregiverGivenName, setCaregiverGivenName] = useState("");
  
  const [careRecipientFirstName, setCareRecipientFirstName] = useState("");
  const [careRecipientLastName, setCareRecipientLastName] = useState("");
  const [careRecipientGivenName, setCareRecipientGivenName] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleRegistration = () => {
    const caregiver = {
      firstName: caregiverFirstName,
      lastName: caregiverLastName,
      email: caregiverEmail,
      password: caregiverPassword,
      givenName: caregiverGivenName,
    };
    const careRecipient = {
      firstName: careRecipientFirstName,
      lastName: careRecipientLastName,
      givenName: careRecipientGivenName,
    };
    console.log("Caregiver:", caregiver);
    console.log("Care Recipient:", careRecipient);
  };

  return (
    <div className="form-container">
      <img src={logo} alt="Living Memory Home" />
      <div className="registration-form">
        <div className="caregiver-form">
          <h3>Caregiver</h3>
          <label htmlFor="caregiverFirstName">First Name</label>
          <input
            type="text"
            id="caregiverFirstName"
            name="firstName"
            placeholder="Enter your First Name"
            value={caregiverFirstName}
            onChange={e => handleInputChange(e, setCaregiverFirstName)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverLastName">Last Name</label>
          <input
            type="text"
            id="caregiverLastName"
            name="lastName"
            placeholder="Enter your Last Name"
            value={caregiverLastName}
            onChange={e => handleInputChange(e, setCaregiverLastName)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverEmail">Email</label>
          <input
            type="email"
            id="caregiverEmail"
            name="email"
            placeholder="Enter your Email"
            value={caregiverEmail}
            onChange={e => handleInputChange(e, setCaregiverEmail)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverPassword">Password</label>
          <input
            type="password"
            id="caregiverPassword"
            name="password"
            placeholder="Enter your Password"
            value={caregiverPassword}
            onChange={e => handleInputChange(e, setCaregiverPassword)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverGivenName">Given Name</label>
          <input
            type="text"
            id="caregiverGivenName"
            name="givenName"
            placeholder="Enter your Given Name"
            value={caregiverGivenName}
            onChange={e => handleInputChange(e, setCaregiverGivenName)}
            className="light-gray-input"
          />
        </div>
        <div className="careRecipient-form">
          <h3>Care Recipient</h3>
          <label htmlFor="careRecipientFirstName">First Name</label>
          <input
            type="text"
            id="careRecipientFirstName"
            name="firstName"
            placeholder="Enter your First Name"
            value={careRecipientFirstName}
            onChange={e => handleInputChange(e, setCareRecipientFirstName)}
            className="light-gray-input"
          />
          <label htmlFor="careRecipientLastName">Last Name</label>
          <input
            type="text"
            id="careRecipientLastName"
            name="lastName"
            placeholder="Enter your Last Name"
            value={careRecipientLastName}
            onChange={e => handleInputChange(e, setCareRecipientLastName)}
            className="light-gray-input"
          />
          <label htmlFor="careRecipientGivenName">Given Name</label>
          <input
            type="text"
            id="careRecipientGivenName"
            name="givenName"
            placeholder="Enter your Given Name"
            value={careRecipientGivenName}
            onChange={e => handleInputChange(e, setCareRecipientGivenName)}
            className="light-gray-input"
          />
          <div className="buttons-container">
            <button onClick={handleRegistration} className='sign-up-btn'>Sign up now</button>
            <div className="or-container">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <button onClick={() => setScreen("login")}>Back to Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
