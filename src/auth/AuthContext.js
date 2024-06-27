import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const signIn = async (email, password) => {
    setIsAuthenticated(true);
    setUserData({
      "id": "12345-abcde-67890-fghij",
      "username": "johndoe",
      "email": "johndoe@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-10T00:00:00Z",
      "lastLogin": "2023-01-09T12:34:56Z",
      "lastPromptCompleted": "",
      "promptInProgress": "",
      "houseSelection": "", 
      "studyGroup": "intervention",
    })
    // try {
    //   const response = await axios.post('http://localhost:3001/api/auth/login', {
    //     email,
    //     password
    //   });

    //   const decodedToken = jwtDecode(response.data.AuthenticationResult.IdToken);

    //   try {
    //     const userDataResponse = await axios.get(`http://localhost:3001/api/user/data/${decodedToken.email}`);
    //     setUserData(userDataResponse.data);
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }

    //   setIsAuthenticated(true);
    // } catch (error) {
    //   setError('Invalid email or password');
    //   console.error('Login error:', error);
    // }
  };

  const selectHouse = (house) => {
    setUserData((prevData) => ({ ...prevData, houseSelection: house }));
  };

  const signOut = () => {
    setUserData(null);
    setIsAuthenticated(false);
  };

  const createUser = async (userDeets) => {
    console.log('Creating user with:', userDeets);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, signIn, signOut, createUser, selectHouse, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
