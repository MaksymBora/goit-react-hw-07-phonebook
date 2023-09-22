export const updatePhonebook = state => state.contacts.items;

export const isLoading = state => state.contacts.isLoading;

export const error = state => state.contacts.error;

export const totalContacts = state => state.contacts.items.length;

export const filteredContact = state => state.filter;
