import { createReducer } from '@reduxjs/toolkit';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { registrationUser, loginUser, currentUser, logoutUser } from './userOperations';

// import { Report } from 'notiflix/build/notiflix-report-aio';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    error: null,
    isAuth: false,
};

export const userReducer = createReducer(initialState, {
    [registrationUser.pending]: (_, { payload }) => { console.log('pending');  Loading.pulse() },
    [registrationUser.fulfilled]: (state, { payload }) => {
        console.log("fulfilled", payload)
        Loading.remove();
        return { ...state, isAuth: true, ...payload }
    },
    [registrationUser.rejected]: (_, { payload }) => {
        console.log(payload)
        Loading.remove();   
        // Report.failure(`${payload.response.data} ${payload.response.status}`, 'Sorry, an error has occurred ', 'Close', {           
        //     width: '500px',
        //     svgSize: '50px',
        //     backOverlayClickToClose: true,
        //     backOverlayColor: 'pink',
        //     borderRadius: '10px',
    },
    [loginUser.pending]:(state, {payload}) => {Loading.pulse()},
    [loginUser.fulfilled]: (state, { payload }) => {
        console.log(payload)
        Loading.remove();
        return { ...state, isAuth: true, ...payload }
    },
    [loginUser.rejected]: (state, { payload }) => { Loading.remove(); },
    
    [currentUser.pending]:(state, {payload}) => {Loading.pulse()},
    [currentUser.fulfilled]: (state, { payload }) => {
        console.log(payload)
        Loading.remove();
        return { ...state, isAuth: true, user: {...payload} }
    },
    [currentUser.rejected]: (state, { payload }) => { Loading.remove(); },
    
    [logoutUser.pending]:(state, {payload}) => {Loading.pulse()},
    [logoutUser.fulfilled]: (state, { payload }) => {
        Loading.remove();
        return { ...state, ...initialState }
    },
    [logoutUser.rejected]:(state, {payload}) => { Loading.remove();},
})
