import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../views/Login';
import RenderOrRedirect from '../components/RenderOrRedirect';
import Home from '../views/Home';
import ReminiscenceRoom from '../views/ReminiscenceRoom';
import WritingDesk from '../views/WritingDesk';
import ReadingRoom from '../views/ReadingRoom';
import HouseSelection from '../views/HouseSelection';

function RouteConfig() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/house-selection" element={<HouseSelection />} />
      <Route path="/" element={<RenderOrRedirect intendedComponent={Home} />} />
      <Route path="/reminiscenceroom" element={<RenderOrRedirect intendedComponent={ReminiscenceRoom} />} />
      <Route path="/writingdesk" element={<RenderOrRedirect intendedComponent={WritingDesk} />} />
      <Route path="/readingroom" element={<RenderOrRedirect intendedComponent={ReadingRoom} />} />
    </Routes>
  );
}

export default RouteConfig;
