import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../services/API.js';

export const registrationUser = createAsyncThunk(
    'user/registrationUser',
    async (userData, thunkAPI) => {
        try {
            const data = await API.signupUser(userData);
            return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, thunkAPI) => {
        try {
            const data = await API.loginUser(userData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const currentUser = createAsyncThunk(
    'user/currentUser',
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.token;
        if (token === null) {
        console.log('Токена нет, уходим из fetchCurrentUser');
        return thunkAPI.rejectWithValue();
        }
        try {
            console.log(token)
            const data = await API.currentUser(token);
            return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token;
            const data = await API.logoutUser(token);
            return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error);           
        }
    }
)