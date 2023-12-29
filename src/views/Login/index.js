// src/views/Login/index.js

import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './login.css';
import logo from '../../assets/img/lmh-dcp-whitebg.png';

function Login({ loginSwitch }) {
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Registration state
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [givenName, setGivenName] = useState("");
  const [firstNameDeceased, setFirstNameDeceased] = useState("");
  const [redCapID, setRedCapID] = useState("");

  // Screen state
  const [screen, setScreen] = useState("login");  // Values can be "login" or "register"

  const handleRegistration = () => {
    console.log("Email:", email);
  }

  const handleLogin = () => {
    loginSwitch();
  }

  const LoginForm = () => (
    <div className="form-container">
      <h3>Log into your home!</h3>
      <div className="login-inputs-container">
        <label htmlFor="email">Email address</label>
        <InputWithIcon 
          id="email"
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={setEmail}
          icon={<FaEnvelope className="icon email-icon" />}
        />
        <label id='passlabel' htmlFor="password">Password</label>
        <InputWithIcon 
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          icon={<FaLock className="icon lock-icon" />}
        />
        <div className="forgot-password-container">
          <a href="#" className="forgot-password-link">Forgot Password?</a>
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
    </div>
  );

  const RegistrationForm = () => (
    <div className="form-container">
      <h2>Register</h2>
      <input
        type="email"
        id="email"
        placeholder="Email*"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="Password*"
        onChange={e => setRegisterPassword(e.target.value)}
      />
      <input
        type="password"
        id="confirmPassword"
        placeholder="Please confirm your password*"
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        id="givenName"
        placeholder="Your Given Name"
        onChange={e => setGivenName(e.target.value)}
      />
      <input
        type="text"
        id="firstNameDeceased"
        placeholder="First Name of the Deceased*"
        onChange={e => setFirstNameDeceased(e.target.value)}
      />
      <input
        type="text"
        id="redCapID"
        placeholder="REDCap ID (if you have one)"
        onChange={e => setRedCapID(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
      <button onClick={() => setScreen("login")} className="switch-to-login">
        Already have an account? Log in
      </button>
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
      <div className="content">
        <div className="left-side-container">
          <img src={logo} alt="Living Memory Home" />
          <p>Your Living Memory Home is a place for you and your care partner to come together and explore your thoughts and feelings through the act of creating.</p>
        </div>
        {screen === "login" ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default Login;