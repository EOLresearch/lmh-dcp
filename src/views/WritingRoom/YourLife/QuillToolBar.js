
import React, { useState } from 'react';

const QuillToolBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div id="toolbar">
      <span className="ql-formats">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-header" value="1"></button>
        <button className="ql-header" value="2"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
      </span>
      {/* <span className="ql-formats">
      <button className="ql-script" value="sub"></button>
      <button className="ql-script" value="super"></button>
    </span> */}
      <span className="ql-formats">
        <button className="ql-indent" value="-1"></button>
        <button className="ql-indent" value="+1"></button>
      </span>
      {/* <span className="ql-formats">
      <select className="ql-size">
        <option value="small"></option>
        <option selected>Default</option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
    </span> */}
      {/* <span className="ql-formats">
      <select className="ql-header">
        <option value="">Normal</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
      </select>
    </span> */}
      <span className="ql-formats">
        <select className="ql-color"></select>
        <select className="ql-background"></select>
      </span>
      <span className="ql-formats">
        <select className="ql-font"></select>
      </span>
      <span className="ql-formats">
        <select className="ql-align"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-clean"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-link"></button>
        {/* <button className="ql-image"></button> */}
      </span>
    </div>

  );

};

export default QuillToolBar;
