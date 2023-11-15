import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import Appointment from './Appointment'
import useToken from './useToken';
import Logout from './Logout';

function App() {
  const { token, setToken, logout } = useToken();
console.log({token})
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Navbar logout={Logout}/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
