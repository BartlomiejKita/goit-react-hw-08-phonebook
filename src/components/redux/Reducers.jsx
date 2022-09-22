import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './Actions';




export const filterReducer = createReducer('', builder => {
  builder.addCase(filterContacts, (_, { payload }) => {
    return payload;
  });
});
