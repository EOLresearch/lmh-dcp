import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RenderOrRedirect from './components/RenderOrRedirect';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './views/Login';

import door from '../src/assets/img/door-md.png';

function App() {
  const [entered, setEntered] = useState(true);

  function handleClick(event) {
    console.log("Type of element:", event.target.tagName);
    console.log("ID of element:", event.target.id);
    console.log("Class(es) of element:", event.target.className);
  }

  if (!entered) {
    return (
      <div className='doorstep-container'>
        <div onClick={handleClick} className='doorstep'></div>
        <div onClick={handleClick} className='door'>
          <img src={door} alt="Door" />
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className='top-container'>
        <header>
          <h2>Living Memory Home</h2>
        </header>
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav> */}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RenderOrRedirect intendedComponent={Home} />} />
          <Route path="/dashboard" element={<RenderOrRedirect intendedComponent={Dashboard} />} />
          {/* Add more routes as needed */}
        </Routes>
        <footer>
          © 2023 Copyright: Center for Research on End of Life Care, Weill Cornell Medicine
        </footer>
      </div>
    </Router>
  );
}

export default App;
