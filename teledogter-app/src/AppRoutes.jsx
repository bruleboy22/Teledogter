import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import SignUp from './SignUp';


function AppRoutes() {
  return (
    <Routes>
      <Route path="./" element={<Home />} />
      <Route path="./Login" element={<Login />} />
      <Route path='./Navbar' element={<Navbar />} />
      <Route path='./SignUp' elemrnt={<SignUp />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default AppRoutes;
