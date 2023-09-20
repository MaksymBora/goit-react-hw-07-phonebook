import { FiPhone } from 'react-icons/fi';
import { DetailsWrapper, PhoneNumberWrapper } from './PhoneView.styled';
import { updatePhonebook } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PhoneView = () => {
  const contacts = useSelector(updatePhonebook);
  const { id } = useParams();
  const currentContact = contacts.find(contact => contact.id === id);

  return (
    <div>
      <DetailsWrapper>
        <h2>Contact Details</h2>
        <PhoneNumberWrapper>
          <FiPhone size={21} />
          <a href={`tel:${currentContact.number}`}>{currentContact.number}</a>
        </PhoneNumberWrapper>
      </DetailsWrapper>
    </div>
  );
};

export default PhoneView;
