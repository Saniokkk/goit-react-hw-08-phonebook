import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, InputAdornment, Typography } from '@mui/material';
import { loginUser } from 'redux/user/userOperations';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export const LogIn = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
});

    const onSubmit = userData => {
        dispatch(loginUser(userData))
        reset();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Box          
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("email", {
                required: "This field is required",
                maxLength: 20,
                pattern: {
                    value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/i,
                    message: "Email must require contain @ and . "
            } })}
            label="Email"
            error={errors?.email?.message ? true : false}
            helperText={errors?.email?.message}
            autoFocus
            required
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <TextField
            {...register("password", {
                required: "This field is required",
                minLength: {
                    value: 6,
                    message: "Min length password is 6"}
            })}
            type={showPassword ? 'text' : 'password'}
            label="Password"
            error={errors?.password?.message ? true : false}
            helperText={errors?.password?.message}
            required
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? (
                    <VisibilityOff />
                    ) : (
                    <Visibility />
                    )}
                </IconButton>
                </InputAdornment>
            ),
            }}    
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