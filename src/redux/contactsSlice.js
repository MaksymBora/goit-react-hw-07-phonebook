import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = `https://6507561d3a38daf4803f70fa.mockapi.io`;

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContacts = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

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

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePostFulfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
};

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.pending, handlePending)
      .addCase(getAllContactsThunk.fulfilled, handleFulfilled)
      .addCase(getAllContactsThunk.rejected, handleRejected)
      .addCase(addNewContact.pending, handlePending)
      .addCase(addNewContact.fulfilled, handlePostFulfilled)
      .addCase(addNewContact.rejected, handleRejected);
  },
  reducers: {
    addNewContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      toast.success(<div>Contact deleted!</div>, {
        duration: 4000,
        icon: '✅',
      });
    },
    updateContact(state, action) {
      const updatedContact = action.payload;
      const currentContact = state.items.findIndex(
        contact => contact.id === updatedContact.id
      );

      if (currentContact !== -1) {
        state.items[currentContact] = updatedContact;
      }
    },
  },
});

export const contactsReducer = slice.reducer;

// Selectors

export const updatePhonebook = state => state.contacts.items;

export const isLoading = state => state.contacts.isLoading;

export const error = state => state.contacts.error;
