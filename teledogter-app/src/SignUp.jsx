import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button
} from '@mui/material';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  
  const handleChange = (setter) => (event) => setter(event.target.value);


  const [pets, setPets] = useState([{
    name: '',
    species: '',
    breed: '',
    birthdate: '',
  }]);

  const handlePetChange = (index, field) => (event) => {
    const newPets = [...pets];
    newPets[index][field] = event.target.value;
    setPets(newPets);
  };
  

  const navigate = useNavigate();
  
  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setRole('');
    setName('');
    setPhoneNumber('');
    setAddress('');
    setPets([{ name: '', species: '', breed: '', birthdate: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/api/users/create', {
      userName: username,
      emailId: email,
      password,
      role,
      profile: {
        name,
        phone: phoneNumber,
        address,
        profile_picture: '',
      },
      pets: pets 
    })
    .then((response) => {
      console.log(response);
    resetForm(); // Reset form upon successful submission
      navigate('/login');
    })
    .catch((error) => {
      console.log(error);
    navigate('/');
    })
};

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the form
        padding: '20px', // Add some padding
        bgcolor: 'background.paper', // Use a light background
        boxShadow: 3, // Add some shadow for depth
        borderRadius: '8px', // Rounded corners
        maxWidth: '500px', // Maximum width
        margin: 'auto', // Center in the page
        marginTop: '80px' // Adjust top margin to push down from navbar
      }}
       
    
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="user-name"
          label="User Name Required"
          variant="filled"
          value={username}
          onChange={handleChange(setUsername)}
        />
        <TextField
          required
          id="email-required"
          label="Email Required"
          variant="filled"
          value={email}
          onChange={handleChange(setEmail)}
        />
        <TextField
          id="password-required"
          label="Password Required"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={handleChange(setPassword)}
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role-select"
            value={role}
            onChange={handleChange(setRole)}
            label="Role"
          >
            <MenuItem value={'Owner'}>Owner</MenuItem>
            <MenuItem value={'Veterinarian'}>Veterinarian</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="Name"
          label="Name"
          variant="filled"
          value={name}
          onChange={handleChange(setName)}
        />
        <TextField
          id="phone-number"
          label="Phone Number"
          type="tel"
          variant="filled"
          helperText="Please enter your phone number"
          value={phoneNumber}
          onChange={handleChange(setPhoneNumber)}
        />
        <TextField
          id="address"
          label="Address"
          variant="filled"
          helperText="Please enter your address"
          value={address}
          onChange={handleChange(setAddress)}
        />
        <Box>
  <TextField
    label="Pet Name"
    variant="filled"
    value={pets[0].name}
    onChange={handlePetChange(0, 'name')}
  />
  <TextField
    label="Species"
    variant="filled"
    value={pets[0].species}
    onChange={handlePetChange(0, 'species')}
  />
  <TextField
    label="Breed"
    variant="filled"
    value={pets[0].breed}
    onChange={handlePetChange(0, 'breed')}
  />
  <TextField
    label="Birthdate"
    type="date"
    variant="filled"
    InputLabelProps={{ shrink: true }}
    value={pets[0].birthdate}
    onChange={handlePetChange(0, 'birthdate')}
  />
</Box>
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ 
            bgcolor: '#333333', 
            color: 'orange', 
            '&:hover': { bgcolor: 'darkgray' } 
          }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}

