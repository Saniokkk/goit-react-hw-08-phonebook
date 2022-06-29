import { useState } from 'react';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from 'redux/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';


export const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [checked, setChecked] = useState(false);
    
    const handleSubmit = event => {
    event.preventDefault();
    };
    
    const handleChange = event => {
        console.log(event.target.id)
        if (event.target.id === 'name') {
            setName(event.target.value)
        }
        if (event.target.id === 'email') {
            setEmail(event.target.value)
        }
        if (event.target.id === 'password') {
            setPassword(event.target.value)
        }
        if (event.target.id === 'repeatPassword') {
            setRepeatPassword(event.target.value)
        }
    };

    const handleCheckbox = event => {
        const { checked } = event.target;
        setChecked(checked)
    }

    return (
        <Box          
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { mb: 2, width: '100%' },
                maxWidth: 400,
                minHeight: 150,
                margin: '20px auto',
                borderRadius: 2,
                boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}          
            // autoComplete="off"          
            >
            <Typography sx={{ fontSize: 28, textAlign: 'center' }} >Sign up</Typography>
            <Typography sx={{ fontSize: 14, textAlign: 'center' }} >using your email address</Typography>
            <TextField
                color="secondary"
                id="name"
                label="Name"
                value={name}
                onChange={handleChange}
                autoFocus
                required
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                fullWidth
            />
            <TextField
                color="secondary"
                id="email"
                label="Email"
                value={email}
                onChange={handleChange}
                required
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                fullWidth
            />
            <TextField
                color="secondary"
                type='password'
                id="password"
                label="Password"
                value={password}
                onChange={handleChange}      
                required   
                fullWidth   
            />
            <TextField
                color="secondary"
                type='password'
                id="repeatPassword"
                label="Repeat password"
                value={repeatPassword}
                onChange={handleChange}      
                required   
                fullWidth
            />
            <FormControlLabel control={<Checkbox color="secondary" onChange={handleCheckbox} />} label="I agree with..." />
            <LoadingButton
                type='submit'
                sx={{bgcolor: 'rgb(146, 80 , 130)', '&:hover': { bgcolor: 'rgb(194, 120, 118)'}, }}            
                disabled={!checked}
                loadingPosition="start"
                startIcon={<HowToRegIcon />}
                variant="contained"
            >
            Sing up
            </LoadingButton>
        </Box>
    )
}