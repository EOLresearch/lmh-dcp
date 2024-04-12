import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Modals from './components/Modals';
import RouteConfig from './components/RouteConfig';
import Footer from './components/Footer';
import { useAuth } from './auth/AuthContext';

function App() {
  const [modalState, setModalState] = useState({
    showAboutUs: false,
    showResources: false,
    showContact: false,
    showAccount: false
  });

  const { isAuthenticated, signOut } = useAuth();

  const toggleModal = (modal) => {
    setModalState(prevState => ({ ...prevState, [modal]: !prevState[modal] }));
  }

  return (
    <Router>
      <div className='top-container'>
        <Header isAuthenticated={isAuthenticated} toggleModal={toggleModal} signOut={signOut} />
        <Modals modalState={modalState} toggleModal={toggleModal} />
        <RouteConfig />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
