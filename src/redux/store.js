import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items, filter } from './contacts/contactsReducer';
import { userReducer } from './user/userReducer';
import storage from 'redux-persist/lib/storage' // d
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const contactsReducer = combineReducers({ items, filter} );

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);    


