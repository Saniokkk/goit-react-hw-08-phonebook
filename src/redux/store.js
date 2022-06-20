import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items, filter } from './contactsReducer';

const reducers = combineReducers({ items, filter} );

export const store = configureStore({
    reducer: {
        contacts:  reducers
    },
});
