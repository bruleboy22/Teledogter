import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function SignUp() {
    const [role, setRole] = useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted", { role });
    };


    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch', bgcolor: '#333333', color: 'orange', '& input': { color: 'orange' }, '& label': { color: 'orange' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'orange' }, '&:hover fieldset': { borderColor: 'orange' }, '&.Mui-focused fieldset': { borderColor: 'orange' } } },
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
               <Button type="submit" variant="contained" sx={{ bgcolor: '#333333', color: 'orange', '&:hover': { bgcolor: 'darkgray' } }}>
                    Submit
                </Button>
            </div>
        </Box>
    );
}
