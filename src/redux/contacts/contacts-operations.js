import api from '../../services/APIService';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const readContacts = createAsyncThunk(
  'contacts/readContacts',
    async (_, { rejectWithValue }) => {
        try {
          const contacts = await api.readContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
  },
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
        try {
          const result = await api.addContacts(contact).then(res => res.json());
          return result;
        } catch (error) {
            return rejectWithValue(error.response);
        }
  },
);

    
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
    async (contactId, { rejectWithValue }) => {
        try {
            await api.deleteContacts(contactId);
            return contactId;
        } catch (error) {
            return rejectWithValue(error);
        }
  },
);
  
