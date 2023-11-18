import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  let navigate = useNavigate();

  const navigateToAppointment = () => {
    navigate('/appointment');
  };

  return (
    <div className="home-container">
      <h1 className="home-title"></h1>
      <div className="image-button-container">
        <img
          src="https://media.istockphoto.com/photos/dog-using-a-tablet-pc-with-headset-picture-id177094527?k=6&m=177094527&s=170667a&w=0&h=iXoNQVOjJIXNEG1AN9H4-dT7z9gFraQ1jEeEh1Ens2c="
          alt="Teledogter App Screenshot"
          className="app-image"
        />
        <button onClick={navigateToAppointment} className="teledogter-booking-button">
          Book an Online Teledogter Now <span className="video-icon">📹</span>
        </button>
      </div>
    </div>
  );
}

export default Home;

