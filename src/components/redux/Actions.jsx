import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('filter/Filter');
const addToken = createAction('token/Add');

export { filterContacts, addToken };
