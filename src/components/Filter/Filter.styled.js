import styled from 'styled-components';
import { InputBase } from '@mui/material';

export const PaperStyledSearch = styled(InputBase)`
  box-shadow: 0 0 0 transparent;
  transition: background-color 250ms ease-in;

  &:focus-within {
    background-color: transparent;
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.52);
  }
`;

export const SearchStyled = styled(InputBase)`
  background-color: inherit;
`;
