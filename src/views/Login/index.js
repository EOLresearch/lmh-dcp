// src/views/Login/index.js

import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './login.css';
import logo from '../../assets/img/lmh-dcp-whitebg.png';
import { useAuth } from '../../auth/AuthContext';

function Login() {
  // Login state
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // State for caregivers and care recipients
  const [caregiver, setCaregiver] = useState({ firstName: "", lastName: "", email: "", password: "", givenName: "" });
  const [careRecipient, setCareRecipient] = useState({ firstName: "", lastName: "", givenName: "" });

  // Screen state
  const [screen, setScreen] = useState("login");  // Values can be "login" or "register"
  const [loginFormScreen, setLoginFormScreen] = useState("default");  // Values can be "default", "resetPassword", "enterCode"

  const { signIn } = useAuth();

  const handleInputChange = (e, setState, field) => {
    setState(prevState => ({ ...prevState, [field]: e.target.value }));
  }

  const handleRegistration = () => {
    console.log("Caregiver:", caregiver);
    console.log("Care Recipient:", careRecipient);
  }

  const handleLogin = () => {
    signIn();
  }

  const LoginForm = () => {
    // Internal state for tracking LoginForm screen
    const [loginFormScreen, setLoginFormScreen] = useState("default");  // Values: "default", "resetPassword", "enterCode"
    const [resetEmail, setResetEmail] = useState('');  // State for the reset email input
    const [oneTimeCode, setOneTimeCode] = useState('');  // State for the one-time code input
    const [newPasswoord, setNewPassword] = useState('');  // State for the new password input
    const [confirmNewPassword, setConfirmNewPassword] = useState('');  // State for the confirm new password input

    // Handle showing the default login form
    const showDefaultLoginForm = () => {
      setLoginFormScreen("default");
    };

    // Handle showing the password reset form
    const showPasswordResetForm = () => {
      setLoginFormScreen("resetPassword");
    };

    // Handle showing the one-time code form
    const showOneTimeCodeForm = () => {
      setLoginFormScreen("enterCode");
    };

    const showNewPass = () => {
      setLoginFormScreen("newPassword");
    }

    const showSuccess = () => {
      setLoginFormScreen("default");
    }

    return (
      <div className="content">
        <div className="left-side-container">
          <img src={logo} alt="Living Memory Home" />
          <p>Your Living Memory Home is a place for you and your care partner to come together and explore your thoughts and feelings through the act of creating.</p>
        </div>
        <div className="form-container">
          {loginFormScreen === "default" && (
            <>
              <h3>Log into your home!</h3>
              <div className="login-inputs-container">
                <label htmlFor="email">Email address</label>
                <InputWithIcon
                  id="email"
                  type="text"
                  placeholder="Enter your email address"
                  value={credentials.email}
                  onChange={(e) => handleInputChange(e, setCredentials, 'email')}
                  icon={<FaEnvelope className="icon email-icon" />}
                />
                <label id='passlabel' htmlFor="password">Password</label>
                <InputWithIcon
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => handleInputChange(e, setCredentials, 'password')}
                  icon={<FaLock className="icon lock-icon" />}
                />
                <div className="forgot-password-container">
                  <a href="#" onClick={showPasswordResetForm} className="forgot-password-link">Forgot Password?</a>
                </div>
              </div>
              <div className="auth-buttons-container">
                <button className='login-btn' onClick={handleLogin}>Login now</button>
                <div className="or-container">
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>
                <button className='sign-up-btn' onClick={() => setScreen("register")}>
                  Sign up now
                </button>
              </div>
            </>
          )}
          {loginFormScreen === "resetPassword" && (
            <div className="login-inputs-container">
              <InputWithIcon
                id="resetEmail"
                type="text"
                placeholder="Enter your email address"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                icon={<FaEnvelope className="icon email-icon" />}
              />
              <button onClick={showOneTimeCodeForm}>Send One-Time Reset Code</button>
              <button className='back-btn' onClick={showDefaultLoginForm}>Back to Login</button>
            </div>
          )}
          {loginFormScreen === "enterCode" && (
            <div className="login-inputs-container">
              <InputWithIcon
                id="oneTimeCode"
                type="text"
                placeholder="Enter the one-time code"
                value={oneTimeCode}
                onChange={(e) => setOneTimeCode(e.target.value)}
                icon={<FaLock className="icon lock-icon" />} // Change icon as appropriate
              />
              <button onClick={showNewPass} >Submit</button>
              <button className='back-btn' onClick={showPasswordResetForm}>Send Another One-Time Code</button>
            </div>
          )}
          {loginFormScreen === "newPassword" && (
            <div className="login-inputs-container ">
              <label htmlFor="newPassword">New Password</label>
              <InputWithIcon
                id="newPassword"
                type="text"
                placeholder="Enter Your New Password"
                value={newPasswoord}
                onChange={(e) => setNewPassword(e.target.value)}
                icon={<FaLock className="icon lock-icon" />} // Change icon as appropriate
              />
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <InputWithIcon
                id="confirmNewPassword"
                type="text"
                placeholder="Confirm Your New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                icon={<FaLock className="icon lock-icon" />} // Change icon as appropriate
              />
              <button onClick={showSuccess}>Submit</button>
              <button className='back-btn' onClick={showPasswordResetForm}>Send Another One-Time Code</button>
            </div>
          )}
        </div>
      </div>
    );
  };



  const RegistrationForm = () => (
    <div className="form-container">
      <img src={logo} alt="Living Memory Home" />
      <div className="registration-form">
        <div className="caregiver-form">
          <h3>Caregiver</h3>
          <label htmlFor="caregiverFirstName">First Name</label>
          <input
            type="text"
            id="caregiverFirstName"
            placeholder="Enter your First Name"
            value={caregiver.firstName}
            onChange={e => handleInputChange(e, setCaregiver, 'firstName')}
            className="light-gray-input"
          />
          <label htmlFor="caregiverLastName">Last Name</label>
          <input
            type="text"
            id="caregiverLastName"
            placeholder="Enter your Last Name"
            value={caregiver.lastName}
            onChange={e => handleInputChange(e, setCaregiver, 'lastName')}
            className="light-gray-input"
          />
          <label htmlFor="caregiverEmail">Email</label>
          <input
            type="email"
            id="caregiverEmail"
            placeholder="Enter your Email"
            value={caregiver.email}
            onChange={e => handleInputChange(e, setCaregiver, 'email')}
            className="light-gray-input"
          />
          <label htmlFor="caregiverPassword">Password</label>
          <input
            type="password"
            id="caregiverPassword"
            placeholder="Enter your Password"
            value={caregiver.password}
            onChange={e => handleInputChange(e, setCaregiver, 'password')}
            className="light-gray-input"
          />
          <label htmlFor="caregiverGivenName">Given Name</label>
          <input
            type="text"
            id="caregiverGivenName"
            placeholder="Enter your Given Name"
            value={caregiver.givenName}
            onChange={e => handleInputChange(e, setCaregiver, 'givenName')}
            className="light-gray-input"
          />
        </div>
        <div className="careRecipient-form">
          <h3>Care Recipient</h3>
          <label htmlFor="careRecipientFirstName">First Name</label>
          <input
            type="text"
            id="careRecipientFirstName"
            placeholder="Enter your First Name"
            value={careRecipient.firstName}
            onChange={e => handleInputChange(e, setCareRecipient, 'firstName')}
            className="light-gray-input"
          />
          <label htmlFor="careRecipientLastName">Last Name</label>
          <input
            type="text"
            id="careRecipientLastName"
            placeholder="Enter your Last Name"
            value={careRecipient.lastName}
            onChange={e => handleInputChange(e, setCareRecipient, 'lastName')}
            className="light-gray-input"
          />
          <label htmlFor="careRecipientGivenName">Given Name</label>
          <input
            type="text"
            id="careRecipientGivenName"
            placeholder="Enter your Given Name"
            value={careRecipient.givenName}
            onChange={e => handleInputChange(e, setCareRecipient, 'givenName')}
            className="light-gray-input"
          />
          <div className="buttons-container">
            <button onClick={handleRegistration} className='sign-up-btn'>Sign up now</button>
            <div className="or-container">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <button onClick={() => setScreen("login")} >Back to Login</button>
          </div>
        </div>
      </div>
    </div>
  );

  const InputWithIcon = ({ id, type, placeholder, value, onChange, icon }) => (
    <div className="input-icon-container">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {icon}
    </div>
  );

  return (
    <div className="login-container">
      {screen === "login" ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default Login;