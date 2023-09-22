import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContacts,
  fetchContactbyId,
  fetchContacts,
  postContacts,
  updateContacts,
} from './service';

export const getAllContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await postContacts({ name, number });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContacts(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ name, number, id }, thunkAPI) => {
    try {
      const response = await updateContacts(id, { name, number, id });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getContactById = createAsyncThunk(
  'contacts/getContactById',
  async (id, thunkAPI) => {
    try {
      const response = await fetchContactbyId(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
