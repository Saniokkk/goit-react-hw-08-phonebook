import { useState } from 'react';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from 'redux/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { Typography } from '@mui/material';


export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = event => {
        event.preventDefault();
    };

    const handleChange = event => {
        console.log(event.target.id)
        if (event.target.id === 'contactName') {
        setEmail(event.target.value)
        }
        if (event.target.id === 'contactNumber') {
        setPassword(event.target.value)
        }
    };


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
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            alignItems: 'center',
            boxSizing: 'border-box',
        }}          
        >
        <Typography sx={{ fontSize: 28, textAlign: 'center'}} >Login Account</Typography>
        <Typography sx={{fontSize: 14, textAlign: 'center'}} >Enter your email and password</Typography>
        <TextField
            sx={{color: 'rgb(194, 120, 118)',width: '80%'}}
            id="email"
            label="Email"
            value={email}
            onChange={handleChange}
            autoFocus
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            fullWidth
        />
        <TextField
            // type='number'
            id="password"
            label="Password"
            value={password}
            onChange={handleChange}      
            required   
            fullWidth   
        />
        <LoadingButton
            type='submit'
            sx={{bgcolor: 'rgb(146, 80 , 130)', '&:hover': { bgcolor: 'rgb(194, 120, 118)'}, }}            
            // loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
        >
        Log IN
        </LoadingButton>
        </Box>
    );

}