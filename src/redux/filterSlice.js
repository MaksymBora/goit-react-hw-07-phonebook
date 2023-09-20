import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      return action.payload;
    },
  },
});

export const { contactsFilter } = slice.actions;
export const filterReducer = slice.reducer;

// ======= VANILLA REDUX =======//

// export const contactsFilter = name => {
//   return {
//     type: 'filter/contactName',
//     payload: name,
//   };
// };

// export const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'filter/contactName':
//       return action.payload;

//     default:
//       return state;
//   }
// };
