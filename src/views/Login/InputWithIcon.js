// src/views/Login/InputWithIcon.js

import React from 'react';

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

export default InputWithIcon;
