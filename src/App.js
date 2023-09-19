import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RenderOrRedirect from './components/RenderOrRedirect';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './views/Login';

function App() {
  const [entered, setEntered] = useState(false);

  function handleClick(event) {
    console.log("Type of element:", event.target.tagName);
    console.log("ID of element:", event.target.id);
    console.log("Class(es) of element:", event.target.className);
  }

  if (!entered) {
    return (
      <div className='doorstep-container'>
        <div onClick={handleClick} className='doorstep'></div>
        <div onClick={handleClick} className='door'></div>
      </div>
    )
  }

  return (
    <Router>
      <nav>
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
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RenderOrRedirect intendedComponent={Home} />} />
        <Route path="/dashboard" element={<RenderOrRedirect intendedComponent={Dashboard} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
