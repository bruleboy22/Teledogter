import React, { useState, useRef } from 'react';
import axios from 'axios';

function Appointment() {
  const [userName, setUserName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log({ userName, date, description }); // Add this line before the axios call

      const response = await axios.post('http://localhost:8080/api/appointments/create', {
  userName,
  appointment_date: date,
  reason_for_visit: description,
  patientName,
});


      console.log(response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    
    <div style={{ backgroundColor: '#333333', padding: '20px', borderRadius: '50px', maxWidth: '500px', margin: 'auto' }}>
      <h2 style={{ color: 'orange' }}>Create Appointment</h2>

      {/* Dr. Langley's Description */}
      <div style={{ color: 'white', marginBottom: '20px', fontSize: '0.9rem' }}>
        <p>Dr. Langley is a 2016 graduate of Ross University School of Veterinary Medicine, St. Kitts (with her clinical year being completed at LSU SVM). Dr. Langley joined Ridgefield Animal Hospital as an associate in 2016 and became a partner in 2019. She is married to Austin Langley. Her veterinary interests include small animal acupuncture, canine and feline medicine, critical care, and dermatology. In 2020, Dr. Langley obtained her Certification in Veterinary Acupuncture from the Chi Institute in Reddick, FL. Dr. Langley offers a variety of acupuncture techniques for her patients including dry needling, electro-acupuncture, and aqua-puncture. In her free time, Dr. Langley enjoys LSU football, offshore fishing, scuba diving, and playing fetch with her two German Shorthaired Pointers, Duncan and Kai.</p>
      </div>

      {/* Image */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="https://www.ridgefieldanimalhospital.com/portals/82/Images/Dr-Langley.jpg" alt="Dr. Kathryn Langley" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      </div>

      {/* Additional Information Below Image */}
      <div style={{ color: 'white', marginBottom: '20px' }}>
        <p>(Pictured with her here are her two German Shorthaired Pointers, Duncan and Kai.)</p>
        <button
        onClick={scrollToForm}
          style={{ display: 'block', width: '100%', padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
        >
          Book this Teledogter
        </button>
      </div>
      <div ref={formRef} style={{ marginTop: '40px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}> {/* Add visual separation */}
        <form onSubmit={handleSubmit} style={{ color: '#333333' }}>{/* Adjust form styles */}
        <div style={{ marginBottom: '10px' }}>
          <label>Owner Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
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
    </div>
  );
}

export default Appointment;

