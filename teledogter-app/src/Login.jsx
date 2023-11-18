import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

async function loginUser(credentials) {
  try {
    console.log("Sending login request with credentials:", credentials);
    const response = await axios.post('http://localhost:8080/api/users/login', credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
}

export default function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({ userName, password });
  
    if (response && response.token) {
      console.log(response)
      setToken(response.token);
      navigate('/');
    } else {
      
      console.error("Login failed. Either username or password is incorrect.");
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  }

  return(
    <div className="login-wrapper">
      <header className="login-header">
        <img src="https://media.istockphoto.com/vectors/cartoon-dog-wearing-a-veterinarians-costume-giving-a-thumbs-up-vector-id638477526?k=6&m=638477526&s=612x612&w=0&h=l0q2HBYAM1YnzFkrN_YVdG2abnOkfTGkZ48Oor72wYE=" alt="Dog" className="header-dog-image" />
        <h3>Welcome to Teledogter</h3>
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div className="secondary-action">
        <span>If you're not already a Teledogter subscriber </span>
        <button type="button" onClick={handleSignUpClick} className="sign-up-button">Sign Up</button>
      </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}