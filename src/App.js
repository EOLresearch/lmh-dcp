import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BsFillBellFill } from "react-icons/bs";
import './App.css';
import RenderOrRedirect from './components/RenderOrRedirect';
import Home from './views/Home';
import ReminiscenceRoom from './views/ReminiscenceRoom';
import WritingDesk from './views/WritingDesk';
import ReadingRoom from './views/ReadingRoom';
import Login from './views/Login';

import Modal from './components/Modal';
import AboutUs from './components/AboutUs';
import DementiaCareResources from './components/DementiaCareResources';
import ContactInfo from './components/ContactInfo';
import ManageAccount from './components/ManageAccount';

import logo2 from './assets/img/logo2-lmh-dcp.png'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAccount, setShowAccount] = useState(false);


  const loginSwitch = () => {
    setIsAuthenticated(true);
    console.log("Login switch called");
  }

  function handleClick(event) {
    console.log("Type of element:", event.target.tagName);
    console.log("ID of element:", event.target.id);
    console.log("Class(es) of element:", event.target.className);
  }

  return (
    <Router>
      <div className='top-container'>
        <header>
          <div className='logo-container'>
            <Link to="/"><img src={logo2} alt="Living Memory Home" /></Link>
          </div>
          {isAuthenticated ? (
            <div className='nav-container'>
              <Link to="/"><button>Home</button></Link>
              <Link to="/reminiscenceroom"><button>Reminiscence Room</button></Link>
              <Link to="/writingdesk"><button>Writing Room</button></Link>
              <Link to="/readingroom"><button>Reading Room</button></Link>
              <Link to=""><button>Grief Resources</button></Link>
              <button onClick={() => setIsAuthenticated(!isAuthenticated)}>Logout</button>
            </div>
          ) : (
            <div className='nav-container'>
              <div className='nav-sub-container'>
                <Link to="/"><button>Home</button></Link>
                <button onClick={() => setShowAboutUs(true)}>About Us</button>
                <button onClick={() => setShowResources(true)}>Resources for Dementia Care Pairs</button>
                <button onClick={() => setShowContact(true)}>Contact</button>
              </div>
              {/* <div className='manage-account-container'>
                <button id='manage-account' onClick={() => setShowAccount(true)}>Manage Account</button>
              </div> I am not totally confident this needs to be present before the user logs in. they would need to log in anyway so we would know what account they wanted to manage */}
            </div>
          )}
        </header>

        {/* Modals */}
        <Modal show={showAboutUs} onClose={() => setShowAboutUs(false)}>
          <AboutUs />
        </Modal>

        <Modal show={showResources} onClose={() => setShowResources(false)}>
          <DementiaCareResources />
        </Modal>

        <Modal show={showContact} onClose={() => setShowContact(false)}>
          <ContactInfo />
        </Modal>

        <Modal show={showAccount} onClose={() => setShowAccount(false)}>
          <ManageAccount />
        </Modal>

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<Login loginSwitch={loginSwitch} />} />
          <Route path="/" element={<RenderOrRedirect loginSwitch={loginSwitch} isAuthenticated={isAuthenticated} intendedComponent={Home} />} />
          <Route path="/reminiscenceroom" element={<RenderOrRedirect loginSwitch={loginSwitch} isAuthenticated={isAuthenticated} intendedComponent={ReminiscenceRoom} />} />
          <Route path="/writingdesk" element={<RenderOrRedirect loginSwitch={loginSwitch} isAuthenticated={isAuthenticated} intendedComponent={WritingDesk} />} />
          <Route path="/readingroom" element={<RenderOrRedirect loginSwitch={loginSwitch} isAuthenticated={isAuthenticated} intendedComponent={ReadingRoom} />} />
        </Routes>
        <footer>
          © 2023 Copyright: Center for Research on End of Life Care, Weill Cornell Medicine
        </footer>
      </div>
    </Router>
  );
}

export default App;
