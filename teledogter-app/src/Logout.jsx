import React from 'react';

function Logout({ logout }) {
  return (
    <nav>
      {/* Other nav items */}
      <button onClick={logout}>Logout</button> {/* Logout button */}
    </nav>
  );
}

export default Logout;
