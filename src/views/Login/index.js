// src/views/Login/index.js

import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [screen, setScreen] = useState("login");  // Values can be "login" or "register"

  const [email, setEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [givenName, setGivenName] = useState("");
  const [firstNameDeceased, setFirstNameDeceased] = useState("");
  const [redCapID, setRedCapID] = useState("");

  const handleRegistration = () => {
    console.log("Email:", email);
  }

  return (
    <div className="login-container">
        <header className="header">
            <img src="/path/to/logo.png" alt="Logo" className="logo" />
            {/* Add other header items if necessary */}
        </header>
        <div className="content">
            <div className="image-container">
                <img src="/path/to/image.png" alt="Image Description" />
            </div>
            {screen === "login" ? (
                <div className="form-container">
                    <h2>Login</h2>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Username"
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <button>Login</button>
                    <button onClick={() => setScreen("register")} className="switch-to-register">
                        No account? Create one now
                    </button>
                </div>
            ) : (
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
            )}
        </div>
        <footer className="footer">
            © 2023 Your Company Name. All rights reserved.
        </footer>
    </div>
);
};
export default Login;
