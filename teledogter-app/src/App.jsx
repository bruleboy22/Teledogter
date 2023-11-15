import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import Appointment from './Appointment'
import useToken from './useToken';
import Logout from './Logout';


function App() {
  const { token, setToken } = useToken();

  return (
    <div className="wrapper">
      <Navbar logout={Logout}/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointment" element={token ? <Appointment /> : <Navigate to="/login" />} />
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
