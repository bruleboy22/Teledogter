import React, { useState } from 'react';
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
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');

  const handleChange = (setter) => (event) => setter(event.target.value);

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
      }
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { 
          m: 1, 
          width: '25ch', 
          bgcolor: '#333333', 
          color: 'orange', 
          '& input': { color: 'orange' }, 
          '& label': { color: 'orange' }, 
          '& .MuiOutlinedInput-root': { 
            '& fieldset': { borderColor: 'orange' }, 
            '&:hover fieldset': { borderColor: 'orange' }, 
            '&.Mui-focused fieldset': { borderColor: 'orange' } 
          } 
        },
        paddingTop: '64px',
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
        <TextField
          id="Name"
          label="Name"
          variant="filled"
          value={name}
          onChange={handleChange(setName)}
        />
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

