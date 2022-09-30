import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, tokenReducer } from './Reducers';
import { phonebookApi } from '../../services/phonebookApi';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    token: tokenReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});
