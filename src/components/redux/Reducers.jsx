import { createReducer } from '@reduxjs/toolkit';
import { filterContacts, addToken, deleteToken } from './Actions';
import Cookies from 'js-cookie';


const initialState = {
  filter: '',
  token: Cookies.get('token') || '',
};

export const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(filterContacts, (_, { payload }) => {
    return payload;
  });
});

export const tokenReducer = createReducer(initialState.token, builder => {
  builder
    .addCase(addToken, (_, { payload }) => {
      return payload;
    })
    .addCase(deleteToken, (state, { payload }) => {
      return '';
    });
});
