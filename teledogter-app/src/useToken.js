import { useState } from 'react';

function safeJSONParse(str) {
  if (!str) {
    console.log("Token string is empty.");
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

  const saveToken = (userToken) => {
    
    localStorage.setItem('token', JSON.stringify({ token: userToken }));
    setToken(userToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    logout,
  };
}

