import {
  readContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';
import { filterItems, resetState} from './contacts-actions';

import { combineReducers, createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [readContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) =>
    isUnique(state, payload)
      ? [...state, payload]
      : alert('THIS NAME IS ALREADY PRESENT IN A PHONEBOOK'),
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [resetState]: state => state =[],
});


const filter = createReducer('', {
  [filterItems]: (_, { payload }) => payload,
  [resetState]:(state)=>state='',
});


export default combineReducers({ items, filter });

function isUnique (phonebookRecords, newRecord) {
  const normalizedNewName = newRecord.name.toLowerCase();
  return !phonebookRecords.some(
    ({ name }) => name.toLowerCase() === normalizedNewName,
  );
}



