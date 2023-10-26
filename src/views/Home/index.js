// src/views/Home/index.js

import { useState, useEffect } from "react";
import { FaDoorOpen } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { GiBookmark } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import SetupGallery from "../../components/SetupGallery";
// import GalleryCard from "../../components/SetupGallery/GalleryCard";

import './home.css';

function Home() {
  const [onboardingStep, setOnboardingStep] = useState('house'); // Could be 'house', 'landscape' or null
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedLandscape, setSelectedLandscape] = useState(null);

  useEffect(() => {
    // Check if the user has chosen a house or landscape, and set the onboarding step accordingly
    if (!selectedHouse) {
      setOnboardingStep('house');
    } else if (!selectedLandscape) {
      setOnboardingStep('landscape');
    } else {
      setOnboardingStep(null);
    }
  }, [selectedHouse, selectedLandscape]);

  function handleSelect(item, type) {
    if (type === 'house') {
      setSelectedHouse(item);
    } else {
      setSelectedLandscape(item);
    }
  }

  const houses = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    // ... other image paths
  ];
  
  const houseLabels = [
    'Label for Image 1',
    'Label for Image 2',
    // ... other labels
  ];
  
  const landscapes = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    // ... other image paths
  ];
  
  const landscapeLabels = [
    'Label for Image 1',
    'Label for Image 2',
    // ... other labels
  ];

  const housesData = houses.map((house, index) => ({
    id: `gallery-item-${index}`,
    image: house,
    label: houseLabels[index]
  }));

  const landscapesData = landscapes.map((landscape, index) => ({
    id: `gallery-item-${index}`,
    image: landscape,
    label: landscapeLabels[index]
  }));

  return (
    <div className="home">
      {onboardingStep && (
        <div className="onboarding-overlay">
          <SetupGallery
            type={onboardingStep}
            items={onboardingStep === 'house' ? housesData : landscapesData}
            onSelect={item => handleSelect(item, onboardingStep)}
          />
        </div>
      )}

      <div className='info-box'>
        <h2>Welcome Home.</h2>
        <p>Welcome back Joe, This is your Living Memory Home.</p>
        <p>A quaint and cozy cottage full of light colors with windows that let in bright sunlight and fresh air. When the surrounding trees are painted in autumn colors, it is a perfect moment to take a breath from your daily routine, slow down, and embrace nature.</p>
        <div className='icon-btn-container'>
          <div className='icon-btn'>
            <span className='icon'>
              <FaDoorOpen />
            </span>
            <p>Reminisence Room</p>
          </div>
          <div className='icon-btn'>
            <span className='icon'>
              <TfiWrite />
            </span>
            <p>Writing Desk</p>
          </div>
          <div className='icon-btn'>
            <span className='icon'>
              <GiBookmark />
            </span>
            <p>Reading Room</p>
          </div>
          <div className='icon-btn'>
            <span className='icon'>
              <AiOutlineUser />
            </span>
            <p>My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
