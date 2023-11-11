import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SignUp() {
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
          defaultValue="User Name"
          variant="filled"
        />
        <TextField
          required
          id="email-required"
          label="Email Required"
          defaultValue="Email"
          variant="filled"
        />
         <TextField
          id="password-required"
          label="Password Required"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role-select"
            value={role}
            onChange={handleChange}
            label="Role"
          >
            <MenuItem value={'Owner'}>Owner</MenuItem>
            <MenuItem value={'Veterinarian'}>Veterinarian</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="Name"
          label="Name"
          type="search"
          variant="filled"
        />
        <TextField
            id="phone-number"
            label="Phone Number"
            type="tel"
            variant="filled"
            helperText="Please enter your phone number"
                />
       <TextField
            id="address"
            label="Address"
            variant="filled"
            helperText="Please enter your address"
                />
      </div>
    </Box>
  );
}