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
import UpcomingAppointments from './UpcomingAppointments';


function App() {
  const { token, setToken, logout } = useToken();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate('/login');
  }

  return (
    <div className="wrapper">
      <Navbar logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointment" element={token ? <Appointment /> : <Navigate to="/login" />} />
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
        <Route path="/video" element={token ? <Video /> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Logout logout={logoutUser}/>} />
        <Route path="/upcomingappointments" element={<UpcomingAppointments />} />

      </Routes>
    </div>
  );
}

export default App;
