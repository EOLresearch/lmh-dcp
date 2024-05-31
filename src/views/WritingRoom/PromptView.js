import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PromptView = ({
  currentPrompt,
  imageInputRef,
  uploadedImage,
  handleImageChange,
  editorContent,
  handleEditorChange,
  handleSave,
  handleNextPrompt,
  handlePreviousPrompt,
  handleViewIndex,
  currentPromptIndex,
  allPrompts,
}) => (
  <div>
    <h2>{currentPrompt}</h2>
    <button onClick={() => imageInputRef.current.click()} className="upload-button">Upload Image</button>
    <input
      type="file"
      ref={imageInputRef}
      style={{ display: 'none' }}
      accept="image/*"
      onChange={handleImageChange}
    />
    {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-thumbnail" />}
    <ReactQuill
      value={editorContent}
      onChange={handleEditorChange}
      theme="snow"
    />
    <button onClick={handleSave} className="save-button">Save</button>
    {currentPromptIndex > 0 && <button onClick={handlePreviousPrompt} className="back-button">Previous</button>}
    {currentPromptIndex < allPrompts.length - 1 && <button onClick={handleNextPrompt} className="next-button">Next</button>}
    <button onClick={handleViewIndex} className="view-index-button">View Index</button>
  </div>
);

export default PromptView;
