import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';

function Appointment() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  
  const scrollToForm = () => {
    setShowForm(true);
   
  };

  useEffect(() => {
    if (showForm) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }, [showForm])

  return (
    <div style={{ backgroundColor: '#333333', padding: '20px', borderRadius: '50px', maxWidth: '500px', margin: 'auto' }}>
      <h2 style={{ color: 'orange' }}>Create Appointment</h2>
    <div style={{ color: 'white', marginBottom: '20px', fontSize: '0.9rem' }}>
        <p>Dr. Langley is a 2016 graduate of Ross University School of Veterinary Medicine, St. Kitts (with her clinical year being completed at LSU SVM). Dr. Langley joined Ridgefield Animal Hospital as an associate in 2016 and became a partner in 2019. She is married to Austin Langley. Her veterinary interests include small animal acupuncture, canine and feline medicine, critical care, and dermatology. In 2020, Dr. Langley obtained her Certification in Veterinary Acupuncture from the Chi Institute in Reddick, FL. Dr. Langley offers a variety of acupuncture techniques for her patients including dry needling, electro-acupuncture, and aqua-puncture. In her free time, Dr. Langley enjoys LSU football, offshore fishing, scuba diving, and playing fetch with her two German Shorthaired Pointers, Duncan and Kai.</p>
    </div>
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <img src="https://www.ridgefieldanimalhospital.com/portals/82/Images/Dr-Langley.jpg" alt="Dr. Kathryn Langley" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
    </div>
    <div style={{ color: 'white', marginBottom: '20px' }}>
      <p>(Pictured with her here are her two German Shorthaired Pointers, Duncan and Kai.)</p>
        <button onClick={scrollToForm}
          style={{ display: 'block', width: '100%', padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
            Book this Teledogter
        </button>
    </div>
{ showForm && <AppointmentForm formRef={formRef}/> }

   
    </div>
  );
}

export default Appointment;

