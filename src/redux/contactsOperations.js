import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../services/API.js';


 
export const getContactList = createAsyncThunk(
    'contacts/getContactList',
    async (_, thunkAPI) => {        
        try {
            const  data  = await API.getContacts();
            return data;
        } catch (error) {            
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createContact = createAsyncThunk(
    'contacts/createContact',
    async (obj, thunkAPI) => {        
        try {
            const data = await API.addContact(obj);            
            return data;
        } catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (id, thunkAPI) => {
            try {
            const data = await API.deleteContact(id);
            return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
