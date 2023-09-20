import * as React from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchStyled, PaperStyledSearch } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const nameFromFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <PaperStyledSearch
      as={Paper}
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        bgcolor: 'rgb(241 243 244)',
        boxShadow: 0,
        borderRadius: '8px',
        transition: 'background-color 250ms ease-in, box-shadow 250ms ease-in',
      }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <SearchStyled
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'filter' }}
        name="filter"
        value={nameFromFilter}
        onChange={e => dispatch(contactsFilter(e.currentTarget.value))}
      />
    </PaperStyledSearch>
  );
};
