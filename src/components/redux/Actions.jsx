import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('filter/Filter');
const addToken = createAction('token/Add');
const deleteToken = createAction('token/Delete');

export { filterContacts, addToken, deleteToken };
