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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
            {/* <img src={} alt="Living Memory Home" /> */}
          </div>
          <div className='nav-container'>
            <Link to="/"><button>Home</button></Link>
            <Link to="/reminiscenceroom"><button>Reminiscence Room</button></Link>
            <Link to ="/writingdesk"><button>Writing Desk</button></Link>
            <Link to="/readingroom"><button>Reading Room</button></Link>
            <Link to=""><button>Grief Resources</button></Link>
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>Logout</button>
          </div>
        </header>
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
