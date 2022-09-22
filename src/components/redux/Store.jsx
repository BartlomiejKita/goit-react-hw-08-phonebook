import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './Reducers';
import { phonebookApi } from '../../services/phonebookApi';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});
