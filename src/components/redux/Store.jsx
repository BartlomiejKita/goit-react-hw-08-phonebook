import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './Reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
