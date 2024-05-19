import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './login.css';
import logo from '../../assets/img/lmh-dcp-whitebg.png';
import { useAuth } from '../../auth/AuthContext';

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [caregiver, setCaregiver] = useState({ firstName: "", lastName: "", email: "", password: "", givenName: "" });
  const [careRecipient, setCareRecipient] = useState({ firstName: "", lastName: "", givenName: "" });
  const [screen, setScreen] = useState("login"); // Values can be "login" or "register"
  const [loginFormScreen, setLoginFormScreen] = useState("default"); // Values can be "default", "resetPassword", "enterCode"

  const { signIn } = useAuth();

  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegistration = () => {
    console.log("Caregiver:", caregiver);
    console.log("Care Recipient:", careRecipient);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(credentials.email, credentials.password);
  };

  const LoginForm = () => {
    const [resetEmail, setResetEmail] = useState('');
    const [oneTimeCode, setOneTimeCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

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
                  type="text"
                  placeholder="Enter your email address"
                  value={credentials.email}
                  onChange={(e) => handleInputChange(e, setCredentials)}
                  icon={<FaEnvelope className="icon email-icon" />}
                />
                <label id='passlabel' htmlFor="password">Password</label>
                <InputWithIcon
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => handleInputChange(e, setCredentials)}
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
                type="text"
                placeholder="Enter your email address"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
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
                onChange={(e) => setOneTimeCode(e.target.value)}
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
                onChange={(e) => setNewPassword(e.target.value)}
                icon={<FaLock className="icon lock-icon" />}
              />
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <InputWithIcon
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="password"
                placeholder="Confirm Your New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
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
            name="firstName"
            placeholder="Enter your First Name"
            value={caregiver.firstName}
            onChange={e => handleInputChange(e, setCaregiver)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverLastName">Last Name</label>
          <input
            type="text"
            id="caregiverLastName"
            name="lastName"
            placeholder="Enter your Last Name"
            value={caregiver.lastName}
            onChange={e => handleInputChange(e, setCaregiver)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverEmail">Email</label>
          <input
            type="email"
            id="caregiverEmail"
            name="email"
            placeholder="Enter your Email"
            value={caregiver.email}
            onChange={e => handleInputChange(e, setCaregiver)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverPassword">Password</label>
          <input
            type="password"
            id="caregiverPassword"
            name="password"
            placeholder="Enter your Password"
            value={caregiver.password}
            onChange={e => handleInputChange(e, setCaregiver)}
            className="light-gray-input"
          />
          <label htmlFor="caregiverGivenName">Given Name</label>
          <input
            type="text"
            id="caregiverGivenName"
            name="givenName"
            placeholder="Enter your Given Name"
            value={caregiver.givenName}
            onChange={e => handleInputChange(e, setCaregiver)}
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
            value={careRecipient.firstName}
            onChange={e => handleInputChange(e, setCareRecipient)}
            className="light-gray-input"
          />
          <label htmlFor="careRecipientLastName">Last Name</label>
          <input
            type="text"
            id="careRecipientLastName"
            name="lastName"
            placeholder="Enter your Last Name"
            value={careRecipient.lastName}
            onChange={e => handleInputChange(e, setCareRecipient)}
            className="light-gray-input"
          />
          <label htmlFor="careRecipientGivenName">Given Name</label>
          <input
            type="text"
            id="careRecipientGivenName"
            name="givenName"
            placeholder="Enter your Given Name"
            value={careRecipient.givenName}
            onChange={e => handleInputChange(e, setCareRecipient)}
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

  const InputWithIcon = ({ id, name, type, placeholder, value, onChange, icon }) => (
    <div className="input-icon-container">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon}
    </div>
  );

  return (
    <div className="login-container">
      {screen === "login" ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
}

export default Login;
