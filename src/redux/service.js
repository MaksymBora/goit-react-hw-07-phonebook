import axios from 'axios';

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

export const fetchContactbyId = async id => {
  const response = await axios.get(`/contacts/${id}`);
  return response.data;
};
