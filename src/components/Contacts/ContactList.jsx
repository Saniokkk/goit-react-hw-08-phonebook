import PropTypes from 'prop-types'; 
import { Button } from 'components/Button';
import { InputFilter } from './InputFilter';
import { Section } from 'components/Section';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactList, removeContact } from 'redux/operations';
import { filterContacts } from 'redux/contactsReducer';
import { Box, TextField } from '@mui/material';
import { Typography } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  // const match = useMatch();
  // console.log(match)

  useEffect(() => {
    dispatch(getContactList())
  }, [dispatch]);
    
  const handleDeleteBtn = event => {
    const currentId = event.target.closest('li').id;    
    dispatch(removeContact(currentId));
  };

  const handleChange = event => {
    const {value } = event.target;    
    dispatch(filterContacts(value));    
  };
  
  const contactsFilter = () => {      
    return contacts.filter(({ name }) => {     
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  return (
    <>
      <Box
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
      >
        <Typography sx={{ fontSize: 28 }} >Contacts</Typography>
        <TextField
          sx={{color: 'rgb(194, 120, 118)',width: '80%'}}
          id="contactFilter"
          label="Filter"
          value={filter}
          onChange={handleChange}
          autoFocus
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          fullWidth
        />
      </Box>
    </>
  )
}


// export const ContactList = ({ value, handleBtn, onChange, filterContacts }) => {
//   return (
//     <Section title="Contacts">
//       <InputFilter name="filter" value={value} onChange={onChange} />
//       <ul>
//         {filterContacts.map(({ name, phone, id }) => {
//           return (
//             <li key={id} className={style.contact} id={id}>
//               {name}: {phone}
//               <Button
//                 type="button"
//                 className={style.remBtn}
//                 name="Delete"
//                 handleBtn={handleBtn}
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </Section>
//   );
// };

ContactList.propTypes = {
  value: PropTypes.string.isRequired,
  handleBtn: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  filterContacts: PropTypes.array.isRequired,
};
