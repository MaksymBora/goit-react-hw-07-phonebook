import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectTotalContacts = state => state.contacts.items.length;

export const selectFilteredContact = state => state.filter;

export const selectContactById = state => state.contacts.currentContact;

export const selectFilteredByName = createSelector(
  [selectContacts, selectFilteredContact],
  (contacts, nameFromFilter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFromFilter.toLowerCase())
    );
  }
);

export const selectCurrentContact = createSelector(
  [selectContacts, (_, props) => props.id],
  (contacts, id) => {
    return contacts.find(contact => contact.id === id);
  }
);
