import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VideoCallIcon from '@mui/icons-material/VideoCall';

function UpcomingAppointments() {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    
    const handleVideoCallClick = (appointmentId) => (e) => {
        e.preventDefault();
        navigate('/video');
    };

    const styles = {
        container: {
            marginTop: '20px',
            color: 'gray'
        },
        form: {
            backgroundColor: '#333333',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px'
        },
        button: {
            backgroundColor: 'orange',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px'
        }
    };


    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/appointments', {
                    headers: {
                        'Cache-Control': 'no-cache'
                    }
                });
                console.log(response.data);
            
                setAppointments(response.data.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };
    
        fetchAppointments();
    }, []);

    return (
        <div style={styles.container}>
            <h2>Scheduled Teledogter Appointments</h2>
            <ul>
                {Array.isArray(appointments) ? (
                    appointments.map((appointment, index) => (
                        <li key={index} style={styles.listItem}>
                            <form style={styles.form} onSubmit={handleVideoCallClick(appointment._id)}>
                                <p>Owner: {appointment.userName}</p>
                                <p>Patient: {appointment.patientName}</p>
                                <p>Date: {appointment.appointment_date}</p>
                                <p>Reason: {appointment.reason_for_visit}</p>
                                <button type="submit" style={styles.button}>
                                    <VideoCallIcon /> Video Call
                                </button>
                            </form>
                        </li>
                    ))
                ) : (
                    <p>No appointments found.</p>
                )}
            </ul>
        </div>
    );
}

export default UpcomingAppointments;