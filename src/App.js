import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Header  from 'components/Header';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage/HomePage';
import { currentUser } from './redux/user/userOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  console.log(isAuth);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

    return (
      <>        
        <Routes>          
          <Route path='/' element={<Header />}>
            <Route path='/' element={<HomePage />}></Route>
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
