import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import toast from 'react-hot-toast';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
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

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addNewContact, removeContact, updateContact } = slice.actions;

// Selectors

export const updatePhonebook = state => state.contacts.items;

// ======= VANILLA REDUX =======//

// export const addNewContact = data => {
//   return {
//     type: 'contacts/addNewContact',
//     payload: data,
//   };
// };

// export const removeContact = id => {
//   return {
//     type: 'contacts/removeContact',
//     payload: id,
//   };
// };

// // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

// export const contactsReducer = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   action
// ) => {
//   switch (action.type) {
//     case 'contacts/addNewContact':
//       const newContact = {
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       };
//       return [...state, newContact];
//     case 'contacts/removeContact':
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };
