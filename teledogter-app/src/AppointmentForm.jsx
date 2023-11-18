import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AppointmentForm({formRef}) {
    const [userName, setUserName] = useState('');
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
  
    
  
    const navigate = useNavigate();
  
   
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log({ userName, date, description });
  
    const response = await axios.post('http://localhost:8080/api/appointments/create', {
      userName,
      appointment_date: date,
      reason_for_visit: description,
      patientName,
  });
      console.log(response.data);
      navigate('/video');
      } catch (error) {
        console.error('Error creating appointment:', error);
      }
    };

    return (
        <div ref={formRef} style={{ marginTop: '40px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}> {/* Add visual separation */}
        <form onSubmit={handleSubmit} style={{ color: '#333333' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Owner Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}/>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}/>
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
          <label>Reason for Visit</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '5px 0', height: '100px' }}
            />
        </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Create Appointment</button>
        </form>
        </div>
    )
}


export default AppointmentForm;