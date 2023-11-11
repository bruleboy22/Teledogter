import React, {useState} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import AppRoutes from './AppRoutes';
import SignUp from './SignUp';

function App() {
  const [token, setToken] = useState(true);

if(!token) {
  return <Login setToken={setToken} />
}
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <SignUp />
    </div>
  );
}




export default App;
