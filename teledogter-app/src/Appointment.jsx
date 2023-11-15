import React, { useState } from 'react';
import axios from 'axios';

function Appointment() {
  const [user, setUser] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/appointments/create', {
        user,
        date,
        description
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#333333', padding: '20px', borderRadius: '50px', maxWidth: '500px', margin: 'auto' }}>
      <h2 style={{ color: 'orange' }}>Create Appointment</h2>
      <form onSubmit={handleSubmit} style={{ color: 'orange' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>User ID</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0', height: '100px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Create Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;

