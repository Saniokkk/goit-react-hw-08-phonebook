import { useState } from 'react';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from 'redux/contacts/contactsOperations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';



export function ContactForm(props){
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: '',
            number: '',
      }});


  const onSubmit = event => {
    if (contacts.find(contact => contact.name === event.name)) {
      Notify.warning(`${event.name} is already in contacts`, { color: "red" });
    } else {
      dispatch(createContact(event));
      reset();
    };   
  };
  
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
          <Typography sx={{fontSize: 28}} >Create contact</Typography>
          <TextField
            {...register("name", {
              required: "This field is required", maxLength: 20,
              pattern: {
                  value: /^[а-яёa-z]|[А-Яа-яЁёЇїІіЄєҐґ']+$/iu,
                  message: "Must contain letters, numbers, "
            } })}
            sx={{color: 'rgb(194, 120, 118)',width: '80%'}}
            label="Name"
            autoFocus
            // required
            error={errors?.name?.message ? true : false}
            helperText={errors?.name?.message}
          />
          <TextField
                {...register("number", {
                    required: "This field is required",
                    // minLength: {
                    //     value: 6,
                    //     message: "Min length password is 6"
                    // },
                  pattern: {
                    value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?/iu,
                    message: "Must include only numbers, - , () ... length 6-14"
                    }
                })}
            label="Number"
            error={errors?.number?.message ? true : false}
            helperText={errors?.number?.message}
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
          Save
        </LoadingButton>
        </Box>
    );
  }
