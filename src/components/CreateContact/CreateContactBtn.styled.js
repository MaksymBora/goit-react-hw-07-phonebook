import styled from 'styled-components';
import { Paper } from '@mui/material';

export const PaperStyled = styled(Paper)`
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  font-weight: 500;

  &:hover {
    box-shadow: -1px 5px 8px -2px rgba(0, 0, 0, 0.65);
  }
`;
