import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
`;

export const Thead = styled.thead`
  width: 100px;
  border-bottom-width: 1px;
  position: sticky;
  top: 4rem;
  z-index: 10;
  background-color: rgba(255, 255, 255, 1);
  font-size: 18px;
`;

export const TableRaw = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableHor = styled.th`
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
`;

export const TotalContacts = styled.thead`
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 14px;

  td {
    padding-top: 14px;
    padding-bottom: 14px;
    font-weight: 500;
  }
`;

export const TableRawContent = styled.tr`
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: rgba(245, 245, 245, 1);

    .ButtonsWrapper {
      display: block;
    }
  }
`;

export const TableDataName = styled.td`
  padding: 1px 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
`;

export const Name = styled.span`
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 24px;
`;

export const TableDataNumber = styled.td`
  padding: 1px 16px;
  font-size: 18px;
  line-height: 24px;
`;

// ====
export const ButtonsWrapper = styled.td`
  display: none;
  position: absolute;
  top: 14px;
  right: 8px;
`;

export const EditBtn = styled.button`
  padding: 4px 6px;
  background: transparent;
  margin-right: 10px;
  border: none;
  color: #00000051;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

export const DeleteBtn = styled.button`
  padding: 4px 6px;
  background: transparent;
  border: none;
  color: #00000051;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;
