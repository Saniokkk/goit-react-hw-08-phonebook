import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from 'components/Section';
import { ContactList } from 'components/Contacts';
import { ContactForm } from 'components/ContactForm';
import { filterContacts } from 'redux/contactsReducer';
import { useEffect } from 'react';
import { createContact, getContactList, removeContact } from 'redux/opirations';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactList())
  }, [dispatch]);
    
  const handleDeleteBtn = event => {
    const currentId = event.target.closest('li').id;    
    dispatch(removeContact(currentId));
  };

  const changeStateAfterSubmit = (contactName, contactNumber) => {
    if (contacts.find(contact => contact.name === contactName)) {
      toast.warn(`${contactName} is already in contacts`, { color: "red" });
    } else {
      return dispatch(createContact({
        name: contactName, phone: contactNumber
      }));
      
    }
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
        <Section title="Phone book">
          <ContactForm stateApp={changeStateAfterSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactList
            onChange={handleChange}
            handleBtn={handleDeleteBtn}
            filterContacts={contactsFilter()}
            value={filter}
          />
        </Section>
        <ToastContainer />
      </>
    );
  }


export default App;
