import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../services/API.js';

export const getContactList = createAsyncThunk(
    'contacts/getContactList',
    async (_, thunkAPI) => {        
        try {
            const token = thunkAPI.getState().auth.token;
            const  data  = await API.getContacts(token);
            return data;
        } catch (error) {            
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createContact = createAsyncThunk(
    'contacts/createContact',
    async (obj, thunkAPI) => {    
        const token = thunkAPI.getState().auth.token;        
        try {
            const data = await API.addContact(obj, token);            
            return data;
        } catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.token;
        try {
            await API.deleteContact(id, token);
            return id;
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
