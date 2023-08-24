// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RenderOrRedirect from './components/RenderOrRedirect';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './views/Login';

function App() {
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
