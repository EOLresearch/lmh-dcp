import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../views/Login';
import RenderOrRedirect from '../components/RenderOrRedirect';
import Home from '../views/Home';
import ReminiscenceRoom from '../views/ReminiscenceRoom';
import WritingRoom from '../views/WritingRoom';
import ReadingRoom from '../views/ReadingRoom';
import HouseSelection from '../views/HouseSelection';
import NotFound from '../views/NotFound'; 

function RouteConfig() {
  return (
    <Routes>
      <Route path="/login" element={<RenderOrRedirect intendedComponent={Login}/>} />
      <Route path="/house-selection" element={<RenderOrRedirect intendedComponent={HouseSelection}/>} />
      <Route path="/" element={<RenderOrRedirect intendedComponent={Home} />} />
      <Route path="/reminiscenceroom" element={<RenderOrRedirect intendedComponent={ReminiscenceRoom} />} />
      <Route path="/writingroom" element={<RenderOrRedirect intendedComponent={WritingRoom} />} />
      <Route path="/readingroom" element={<RenderOrRedirect intendedComponent={ReadingRoom} />} />

       Wildcard route for any other URLs
       <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouteConfig;
