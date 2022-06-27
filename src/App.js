import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from 'components/Contacts';
import { ContactForm } from 'components/ContactForm';
import { filterContacts } from 'redux/contactsReducer';
import { getContactList, removeContact } from 'redux/operations';
import Header from 'components/Header';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

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
        
        <Routes>          
          <Route path='/' element={<Header />}>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/contacts' element={<ContactsPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
          </Route>
        </Routes>
      </>
    );
  }


export default App;

        // <Header />
        // <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        //   <ContactForm  />          
        //     <ContactList
        //       onChange={handleChange}
        //       handleBtn={handleDeleteBtn}
        //       filterContacts={contactsFilter()}
        //       value={filter}
        //     />          
        //   <ToastContainer />
        // </ThemeProvider>;
