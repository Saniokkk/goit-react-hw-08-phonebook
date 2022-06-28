import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, useMatch } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from 'components/Contacts';
import { ContactForm } from 'components/ContactForm';
import { filterContacts } from 'redux/contactsReducer';
import { getContactList, removeContact } from 'redux/operations';
import Header  from 'components/Header';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

function App() {
    return (
      <>        
        <Routes>          
          <Route path='/' element={<Header />}>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/contacts' element={<ContactsPage />}></Route>
          </Route>
        </Routes>
        <ToastContainer />
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
