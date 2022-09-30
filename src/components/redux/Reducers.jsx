import { createReducer } from '@reduxjs/toolkit';
import { filterContacts, addToken } from './Actions';

const initialState = {
  filter: '',
  token: '',
};

export const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(filterContacts, (_, { payload }) => {
    return payload;
  });
});

export const tokenReducer = createReducer(initialState.token, builder => {
  builder.addCase(addToken, (_, { payload }) => {
    return payload.token;
  });
});
