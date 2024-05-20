// src/views/Login/LoginForm.js

import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../../auth/AuthContext';
import InputWithIcon from './InputWithIcon';
import logo from '../../assets/img/lmh-dcp-whitebg.png';

const LoginForm = ({ setScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFormScreen, setLoginFormScreen] = useState("default"); // Values can be "default", "resetPassword", "enterCode"
  const [resetEmail, setResetEmail] = useState('');
  const [oneTimeCode, setOneTimeCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const { signIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

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
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                icon={<FaEnvelope className="icon email-icon" />}
              />
              <label id='passlabel' htmlFor="password">Password</label>
              <InputWithIcon
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                icon={<FaLock className="icon lock-icon" />}
              />
              <div className="forgot-password-container">
                <a href="#" onClick={() => setLoginFormScreen("resetPassword")} className="forgot-password-link">Forgot Password?</a>
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
              name="resetEmail"
              type="email"
              placeholder="Enter your email address"
              value={resetEmail}
              onChange={(e) => handleInputChange(e, setResetEmail)}
              icon={<FaEnvelope className="icon email-icon" />}
            />
            <button onClick={() => setLoginFormScreen("enterCode")}>Send One-Time Reset Code</button>
            <button className='back-btn' onClick={() => setLoginFormScreen("default")}>Back to Login</button>
          </div>
        )}
        {loginFormScreen === "enterCode" && (
          <div className="login-inputs-container">
            <InputWithIcon
              id="oneTimeCode"
              name="oneTimeCode"
              type="text"
              placeholder="Enter the one-time code"
              value={oneTimeCode}
              onChange={(e) => handleInputChange(e, setOneTimeCode)}
              icon={<FaLock className="icon lock-icon" />}
            />
            <button onClick={() => setLoginFormScreen("newPassword")}>Submit</button>
            <button className='back-btn' onClick={() => setLoginFormScreen("resetPassword")}>Send Another One-Time Code</button>
          </div>
        )}
        {loginFormScreen === "newPassword" && (
          <div className="login-inputs-container">
            <label htmlFor="newPassword">New Password</label>
            <InputWithIcon
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter Your New Password"
              value={newPassword}
              onChange={(e) => handleInputChange(e, setNewPassword)}
              icon={<FaLock className="icon lock-icon" />}
            />
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <InputWithIcon
              id="confirmNewPassword"
              name="confirmNewPassword"
              type="password"
              placeholder="Confirm Your New Password"
              value={confirmNewPassword}
              onChange={(e) => handleInputChange(e, setConfirmNewPassword)}
              icon={<FaLock className="icon lock-icon" />}
            />
            <button onClick={() => setLoginFormScreen("default")}>Submit</button>
            <button className='back-btn' onClick={() => setLoginFormScreen("resetPassword")}>Send Another One-Time Code</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
