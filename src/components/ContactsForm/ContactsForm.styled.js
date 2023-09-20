import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 500px;
  font-weight: 500;
  padding: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const Button = styled.button`
  display: block;
  padding: 8px;
  min-width: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: none;
  background: transparent;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: transform 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    color: #47a76a;
    transform: scale(1.1);
  }

  &:active {
    color: #47a76a;
    transform: scale(1.1);
  }
`;
