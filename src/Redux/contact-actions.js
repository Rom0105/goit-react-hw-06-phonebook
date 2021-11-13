import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import types from './contact-types';

export const addContact = createAction('contact/add', (name, number) => {
  return {
    payload: {
      id: nanoid(5),
      name: name,
      number: number,
    },
  };
});

export const deleteContact = createAction('contact/delete');

export const changeFilter = createAction('contact/changeFilter');

// export const addContact = (text, number) => ({
//   type: types.ADD,
//   payload: {
//     id: nanoid(),
//     name: text,
//     phone: number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
