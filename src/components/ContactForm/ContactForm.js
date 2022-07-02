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
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        mode: 'onBlur',
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
                  value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
                  message: "Must contain letters, numbers, "
            } })}
            sx={{color: 'rgb(194, 120, 118)',width: '80%'}}
            // id="contactName"
            label="Name"
            // value={name}
            // onChange={handleChange}
            autoFocus
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <TextField
                {...register("number", {
                    required: "This field is required",
                    minLength: {
                        value: 6,
                        message: "Min length password is 6"}
                })}
            label="Number"
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
          Save
        </LoadingButton>
        </Box>
    );
  }
