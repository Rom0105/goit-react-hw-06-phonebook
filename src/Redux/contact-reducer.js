import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contact-types';
import * as actions from './contact-actions';
import contacts from '../json/contacts.json';

const items = createReducer(contacts, {
  [actions.addContact]: (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },

  [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actions.changeFilter:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
