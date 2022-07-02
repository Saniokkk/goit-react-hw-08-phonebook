import React, { useState } from 'react';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Checkbox, FormControlLabel, IconButton, InputAdornment, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { registrationUser } from 'redux/user/userOperations';


export const RegistrationForm = () => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            password: '',
    }});

    const onSubmit = dataUser => {
        dispatch(registrationUser(dataUser));
        reset();
    };
    
    useEffect(() => {console.log(watch()) },[watch])
    
    const handleCheckbox = event => {
        const { checked } = event.target;
        setChecked(checked)
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
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}          
            >
                <p>{errors?.number?.message}</p>
            <Typography sx={{ fontSize: 28, textAlign: 'center' }} >Sign up</Typography>
            <Typography sx={{ fontSize: 14, textAlign: 'center' }} >using your email address</Typography>
            <TextField 
                {...register("name", {
                    required: "This field is required", maxLength: 20,
                    pattern: {
                        value: /^[а-яёa-z]|[А-Яа-яЁёЇїІіЄєҐґ']+$/iu,
                        message: "Must contain 1-st letters, numbers"
                } })}
                color="secondary"
                label="Name"
                autoFocus
                error={errors?.name?.message ? true : false}
                helperText={errors.name?.message}
                required
            />
            <TextField
                {...register("email", {
                    required: "This field is required",
                    maxLength: 26,
                    pattern: {
                        value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/i,
                        message: "Email must require contain @ and . "
                } })}
                color="secondary"
                label="Email"
                error={errors?.email?.message ? true : false}
                helperText={errors?.email?.message}
                // required
            />
            <TextField
                {...register("password", {
                    required: "This field is required",
                    minLength: {
                        value: 6,
                        message: "Min length password is 6"}
                })}
                color="secondary"
                type='password'
                label="Password"
                error={errors?.password?.message ? true : false}
                helperText={errors?.password?.message}
                required
                // InputProps={{
                //     endAdornment: (
                //       <InputAdornment position="end">
                //         <IconButton
                //           aria-label="toggle password visibility"
                //         //   onClick={handleClickShowPassword}
                //           edge="end"
                //         >
                //           {values.showPassword ? (
                //             <VisibilityOff />
                //           ) : (
                //             <Visibility />
                //           )}
                //         </IconButton>
                //       </InputAdornment>
                //     ),
                //   }}
            />
            {/* <TextField
                color="secondary"
                type='password'
                name="repeatPassword"
                label="Repeat password"
                required
                error={errors?.password?.message ? true : false}
                helperText={errors?.password?.message}     
            /> */}
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