import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  top: 0;
  position: sticky;
  background-color: rgba(255, 255, 255, 1);
  padding: 0 16px;

  @media screen and (min-width: 767px) {
    padding-bottom: 10px;
    padding-top: 10px;
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.div`
  display: block;
  font-weight: 700;
  font-size: 24px;

  @media screen and (min-width: 767px) {
    font-size: 28px;
  }
`;
