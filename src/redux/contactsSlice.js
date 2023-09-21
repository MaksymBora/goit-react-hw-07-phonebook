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

export const deleteContacts = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export const updateContacts = async (id, { name, number }) => {
  const response = await axios.put(`/contacts/${id}`, { name, number, id });
  return response.data;
};

// ===================

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

// ====================

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

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);

  toast.success(<div>Contact deleted!</div>, {
    duration: 4000,
    icon: '✅',
  });
};

const handleEditFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const updatedContact = state.items.findIndex(
    contact => contact.id === action.payload.id
  );

  if (updatedContact !== -1) {
    state.items[updatedContact] = action.payload;
  }
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
      .addCase(addNewContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, handleDeleteFulfilled)
      .addCase(removeContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, handleEditFulfilled)
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;
