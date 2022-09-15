import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  };
});


const deleteContact = createAction("contacts/Delete");

const filterContacts = createAction("filter/Filter");

export { addContact, deleteContact, filterContacts };