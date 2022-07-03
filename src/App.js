import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from "react-router-dom";
import { currentUser } from './redux/user/userOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProtectedRoute } from 'components/ProtectedRoute';
import Header  from 'components/Header';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
// const HomePage = lazy(() =>
//   import('pages/HomePage' /* webpackChunkName: "home-page" */)
// );

// const ContactsPage = lazy(() =>
//   import('../pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
// );
// const RegisterPage = lazy(() =>
//   import('../pages/RegisterPage' /* webpackChunkName: "register-page" */)
// );

// const LoginPage = lazy(() =>
//   import('../pages/LoginPage' /* webpackChunkName: "login-page" */)
// );

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

    return (
      <>        
        <Routes>          
          <Route path='/' element={<Header />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/register'
              element={<ProtectedRoute redirectPath='/contacts' isAllowed={!isAuth}>
                        <RegisterPage />
                      </ProtectedRoute>}>
            </Route>
            <Route path='/login'
              element={<ProtectedRoute redirectPath='/contacts' isAllowed={!isAuth}>
                        <LoginPage />
                      </ProtectedRoute>}>
            </Route>
            <Route path='/contacts'
              element={<ProtectedRoute redirectPath='/login' isAllowed={isAuth}>
                        <ContactsPage />
                      </ProtectedRoute>}>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </>
    );
  }


export default App;

