// src/views/Home/index.js

import { useState, useEffect } from "react";
import { FaDoorOpen } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { GiBookmark } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import SetupGallery from "../../components/SetupGallery/SetupGallery";
import MessageOverlay from "../../components/MessageOverlay";

import house from "../../assets/img/house1-xl.jpg"
import house2 from "../../assets/img/house2-xl.jpg"
import scene from "../../assets/img/scene1-xl.jpg"
import scene2 from "../../assets/img/scene2-xl.jpg"


import './home.css';

function Home() {
  const [onboardingStep, setOnboardingStep] = useState('house'); // Could be 'house', 'landscape' or null
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedLandscape, setSelectedLandscape] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);


  const messages = [
    <div className="message">
      <h2>About your Living Memory Home</h2>
      <p>Your Living Memory Home is a place for you to explore your thoughts and feelings about your loss and honor the deceased through the act of creating.</p>
    </div>
    , <div className="message">
    <h2>About your Living Memory Home</h2>
    <p>Through this process, you will journal about your loss and complete reminiscences based activities that will allow you to engage with and reflect, meditate, and grieve with your loved one.</p>
  </div>
  , <div className="message">
  <h2>Let's Get Started!</h2>
  <p>To begin, select a house that feels like home to you. As you continue on your grief journey, your Living Memory Home will be here for you.</p>
</div>
, <div className="message">
<h2>A Few Tips...</h2>
<p>Browse the homes by clicking the left and right arrows. Select a home by clicking the "Select" button.</p>
</div>
];

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
    house,
    house2,
  ];

  const houseLabels = [
    'Label for Image 1',
    'Label for Image 2',
  ];

  const landscapes = [
    scene,
    scene2,
  ];

  const landscapeLabels = [
    'Label for Image 1 landscapes',
    'Label for Image 2 landscapes',
  ];

  const housesData = houses.map((house, index) => ({
    id: `gallery-item-${index}`,
    image: house,
    label: houseLabels[index]
  }));

  const landscapesData = landscapes.map((landscape, index) => ({
    id: `landscape-item-${index}`,
    image: landscape,
    label: landscapeLabels[index]
  }));

  return (
    <div className="home">
      {(onboardingStep && messageIndex < messages.length) && (
        <MessageOverlay
          message={messages[messageIndex]}
          onNext={() => setMessageIndex(messageIndex + 1)}
        />
      )}

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
