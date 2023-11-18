import React from 'react';

function Logout({ logout }) {
  return (
    <nav>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Logout;
