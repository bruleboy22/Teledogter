import { useState } from 'react';

function safeJSONParse(str) {
  if (str === undefined || str === null || str === '') {
    console.log("Token string is undefined or null.");
    return null;
  }

  try {
    return JSON.parse(str);
  } catch (e) {
    console.error("Error parsing JSON:", e);
    return null;
  }
}

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = safeJSONParse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  // New function to handle logout
  const logout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    setToken(null); // Reset the token state
  };

  return {
    setToken: saveToken,
    token,
    logout // Include the logout function in the return statement
  };
}
