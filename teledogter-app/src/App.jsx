import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import Appointment from './Appointment';
import useToken from './useToken';
import Video from './Video';
import Logout from './Logout';


function App() {
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const logout = () => {
    console.log('Logging out');
    setToken(null);
    navigate('/login');
  };

  return (
    <div className="wrapper">
      <Navbar logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointment" element={token ? <Appointment /> : <Navigate to="/login" />} />
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
        <Route path="/video" element={token ? <Video /> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
