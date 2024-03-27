// src/views/Home/index.js

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { FaDoorOpen } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { GiBookmark } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";


import './home.css';

function Home() {
  const [onboardingStep, setOnboardingStep] = useState('house');
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedLandscape, setSelectedLandscape] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);



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



  return (
    <div className="home">

    </div>
  );
}

export default Home;
