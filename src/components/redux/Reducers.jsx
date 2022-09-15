import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './Actions';
import { combineReducers } from 'redux';


const initialState = {
  items: [],
  filter: '',
};


const contactsReducer = createReducer(initialState.items, builder => {
  builder
    .addCase(addContact, (state, { payload }) => {
       return [...state, payload];
    })
    .addCase(deleteContact, (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    });
});

const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(filterContacts, (_, { payload }) => {
    return payload;
  });
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});








