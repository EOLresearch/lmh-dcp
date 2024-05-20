// src/views/Login/Login.js

import React, { useState } from 'react';
import logo from '../../assets/img/lmh-dcp-whitebg.png';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './login.css';

function Login() {
  const [screen, setScreen] = useState("login"); // Values can be "login" or "register"

  return (
    <div className="login-container">
      {screen === "login" ? (
        <LoginForm setScreen={setScreen} />
      ) : (
        <RegistrationForm setScreen={setScreen} />
      )}
    </div>
  );
}

export default Login;