import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items, filter } from './contactsReducer';
import { userReducer } from './userReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // d

// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['auth']
// }
 
// const authPersistConfig = {
//   key: 'auth',
//   storage: storage,
//   blacklist: ['somethingTemporary']
// }
const reducers = combineReducers({ items, filter} );
 
// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   other: otherReducer,
// })
 
// export default persistReducer(rootPersistConfig, rootReducer)
 
export const store = configureStore({
    reducer: {
        contacts: reducers,
        auth: userReducer,
    },
});

