import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  max-width: 520px;
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;

  h2 {
    font-size: 18px;
  }
`;

export const PhoneNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-decoration: none;
    color: rgba(59, 130, 246, 1);
  }
`;
