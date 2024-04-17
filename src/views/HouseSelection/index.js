import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import WelcomeScreen from './WelcomeScreen';
import InstructionsScreen from './InstructionsScreen';
import GalleryView from './GalleryView';
import './houseSelection.css';

const HouseSelection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return <WelcomeScreen handleNext={handleNext} />;
      case 1:
        return <InstructionsScreen handleNext={handleNext} />;
      case 2:
        return <GalleryView />;
      default:
        return <WelcomeScreen handleNext={handleNext} />;
    }
  };

  return (
    <div className='house-selection-container'>
      {renderStep()}
    </div>
  );
};

export default HouseSelection;
