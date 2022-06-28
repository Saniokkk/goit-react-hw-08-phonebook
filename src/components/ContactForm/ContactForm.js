import { useState } from 'react';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from 'redux/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { Typography } from '@mui/material';



export function ContactForm(props){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();


  const handleSubmit = event => {
    event.preventDefault();
    console.log(event)
    changeStateAfterSubmit(name, number);    
  };

    const changeStateAfterSubmit = (contactName, contactNumber) => {
    if (contacts.find(contact => contact.name === contactName)) {
      Notify.warning(`${contactName} is already in contacts`, { color: "red" });
    } else {
      setName('');
      setNumber('');
      return dispatch(createContact({
        name: contactName, phone: contactNumber
      }));      
    }
  };



  const handleChange = event => {
    console.log(event.target.id)
    if (event.target.id === 'contactName') {
      setName(event.target.value)
    }
    if (event.target.id === 'contactNumber') {
      setNumber(event.target.value)
    }
  };
  
  return (
      // <Section title="Phone book">
        <Box          
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
              maxWidth: 400,
              minHeight: 150,
              margin: '20px auto',
              borderRadius: 2,
              boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              alignItems: 'center',
          }}          
          // autoComplete="off"          
        >
          <Typography sx={{fontSize: 28}} >Create contact</Typography>
          <TextField
            sx={{color: 'rgb(194, 120, 118)',width: '80%'}}
            id="contactName"
            label="Name"
            value={name}
            onChange={handleChange}
            autoFocus
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            fullWidth
          />
          <TextField
            // type='number'
            id="contactNumber"
            label="Number"
            value={number}
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
          Save
        </LoadingButton>
        </Box>
      // </Section>
  );
 
  }
//  return (
//     <Section title="Phone book">       
//       <form className={style.form} onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChange}
//         />
//         <label htmlFor="number">Number</label>
//         <input
//           type="tel"
//           name="number"
//           id="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleChange}
//         />
//         <Button
//           type="submit"
//           className={style.formBtn}
//           name="Add contact"
//           onClick={handleChange}
//         />
//       </form>
//     </Section>
//     );