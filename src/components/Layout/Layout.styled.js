import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;

  @media screen and (min-width: 767px) {
    width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
  }
`;
