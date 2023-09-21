import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import {
  Thead,
  Table,
  TableRaw,
  TableHor,
  TableDataName,
  TableRawContent,
  TableDataNumber,
  DeleteBtn,
  Name,
  TotalContacts,
  EditBtn,
  ButtonsWrapper,
} from './ContactsList.styled';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContactsThunk, removeContact } from 'redux/contactsSlice';
import { updatePhonebook } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const ContactList = ({ stateItem }) => {
  const contacts = useSelector(updatePhonebook);

  const contactsAmount = useSelector(state => state.contacts.items.length);
  const nameFromFilter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameFromFilter.toLowerCase())
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  const handleContactClick = contactId => {
    navigate(`contact/${contactId}`, { state: stateItem });
  };

  return (
    <>
      <Table>
        <Thead>
          <TableRaw>
            <TableHor>Name</TableHor>
            <TableHor>Phone Number</TableHor>
          </TableRaw>
        </Thead>
        <TotalContacts>
          <tr>
            <td>CONTACTS ({contactsAmount})</td>
          </tr>
        </TotalContacts>
        <tbody>
          {filteredContacts.map(contact => {
            const firstLetter = contact.name.slice(0, 1).toUpperCase();

            const contactName = contact.name.charAt(0).toUpperCase();
            const contactSliced = contact.name.slice(1);
            const ContactNameCapital = contactName + contactSliced;

            return (
              <TableRawContent
                key={contact.id}
                onClick={() => handleContactClick(contact.id)}
              >
                <TableDataName>
                  <Avatar
                    sx={{
                      bgcolor: getRandomHexColor(),
                      width: 40,
                      height: 40,
                    }}
                  >
                    {firstLetter}
                  </Avatar>
                  <Name>{ContactNameCapital}</Name>
                </TableDataName>

                <TableDataNumber>{contact.number}</TableDataNumber>

                <ButtonsWrapper className="ButtonsWrapper">
                  <EditBtn
                    onClick={e => {
                      e.stopPropagation();
                      navigate(`contact/${contact.id}/edit`);
                    }}
                  >
                    <FiEdit size={25} />
                  </EditBtn>
                  <DeleteBtn
                    onClick={e => {
                      e.stopPropagation();

                      const isConfirmed = window.confirm('Delete contact?');
                      if (isConfirmed) {
                        // dispatch(removeContact(contact.id));
                      }
                    }}
                  >
                    <MdDelete size={25} />
                  </DeleteBtn>
                </ButtonsWrapper>
              </TableRawContent>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
