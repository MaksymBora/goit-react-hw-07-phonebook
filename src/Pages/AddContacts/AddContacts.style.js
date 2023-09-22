import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: 40px;
  font-size: 12px;

  h2 {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  gap: 35px;

  @media screen and (min-width: 767px) {
    gap: 135px;
  }
`;

export const BackBtn = styled(Link)`
  color: #696969;
  transition: color 250ms ease-in-out;

  &:hover {
    color: #47a76a;
  }

  &:active {
    color: #47a76a;
  }
`;
