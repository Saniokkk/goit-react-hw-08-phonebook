import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from '../services/API.js';

export const getContactList = createAsyncThunk(
    'contacts/getContactList',
    async (_, thunkAPI) => {        
        try {
            const  data  = await getContacts();
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
            const data = await addContact(obj);            
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
            const data = await deleteContact(id);
            return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

 