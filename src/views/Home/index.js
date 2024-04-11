// src/views/Home/index.js

import { useState, useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";

import './home.css';

function Home() {
  const { isAuthenticated, userData, signOut } = useAuth();

  return (
    <div className="home">

    </div>
  );
}

export default Home;
