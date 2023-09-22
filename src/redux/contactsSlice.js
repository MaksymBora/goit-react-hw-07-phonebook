import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  addNewContact,
  editContact,
  getAllContactsThunk,
  getContactById,
  removeContact,
} from './thunk';

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

const handleByIdFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.currentContact = action.payload;
};

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentContact: null,
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
      .addCase(editContact.rejected, handleRejected)
      .addCase(getContactById.pending, handlePending)
      .addCase(getContactById.fulfilled, handleByIdFulfilled)
      .addCase(getContactById.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;
