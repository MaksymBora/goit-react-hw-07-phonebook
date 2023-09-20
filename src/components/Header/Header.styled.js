import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  z-index: 10;
  top: 0;
  position: sticky;
  background-color: rgba(255, 255, 255, 1);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.div`
  display: block;
  font-weight: 700;
  font-size: 28px;
`;
