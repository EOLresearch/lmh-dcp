import React, { useState } from 'react';
import './yourlife.css'; // Make sure to create and style this CSS file

function YourLife({ setShowYourLife }) {
  const [response, setResponse] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newImageUrls = selectedFiles.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImageUrls]);
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  return (
    <div className="mementos-content">
      <div className="left-side">
        <h3>This is Your Life</h3>
        <p>Here, we will provide prompts and journaling exercises for you to rediscover and explore the events of your life.</p>
        <p>These prompts are designed for you to tell your stories the way you want. You will be able to add photos at various points and be prompted to talk about important places and people in your life.</p>
        <p>When you have completed the prompts to a degree where you are satisfied, you will be able to export your work here into a PDF to keep a digital copy for yourself.</p>
        <p>Read the prompt on the next page to get started.</p>
      </div>
      <div className="right-side">
        <p>Share your story:</p>
        <input type="file" multiple onChange={handleImageUpload} />
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} />
        ))}
        <textarea
          value={response}
          onChange={handleResponseChange}
          placeholder="Type your response here..."
          rows="10"
          style={{ width: '100%' }}
        ></textarea>
        <button onClick={() => setShowYourLife(false)}>Back</button>
      </div>
    </div>
  );
}

export default YourLife;