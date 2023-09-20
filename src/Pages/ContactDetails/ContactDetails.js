import { Suspense, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackBtn,
  AvatarWrapper,
  Avatar,
  TopContent,
  BtnWrapper,
  RemoveBtnWrapper,
  RemoveButton,
  EditBtnWrapper,
  EditButton,
} from './ContactDetails.styled';
import { TbArrowBackUp } from 'react-icons/tb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { removeContact, updatePhonebook } from 'redux/contactsSlice';
import CircularProgress from '@mui/material/CircularProgress';

const ContactDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const contacts = useSelector(updatePhonebook);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const currentContact = contacts.find(contact => contact.id === id);

  const backLinkLocation = useRef(location.state?.from ?? '/');

  const handleDelete = () => {
    const isConfirmed = window.confirm('Delete contact?');

    if (isConfirmed) {
      dispatch(removeContact(id));
      navigate('/');
    }
  };

  const handleContactEdit = () => {
    navigate(`edit`, { state: { from: location } });
  };

  return (
    <>
      <TopContent>
        <AvatarWrapper>
          <Avatar>
            <BackBtn to={backLinkLocation.current}>
              <TbArrowBackUp size={'30px'} />
            </BackBtn>

            <AccountCircleIcon sx={{ fontSize: '210px', color: '#7E57C2' }} />
          </Avatar>
          <div>
            <h2>{currentContact.name}</h2>
          </div>
        </AvatarWrapper>

        <BtnWrapper>
          <EditBtnWrapper type="button" onClick={() => handleContactEdit()}>
            <EditButton>Edit</EditButton>
          </EditBtnWrapper>

          <RemoveBtnWrapper>
            <RemoveButton typeof="button" onClick={handleDelete}>
              Delete
            </RemoveButton>
          </RemoveBtnWrapper>
        </BtnWrapper>
      </TopContent>
      <hr style={{ marginTop: '20px', marginBottom: '40px' }} />

      <div>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                marginTop: '100px',
              }}
            >
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <CircularProgress color="success" />
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default ContactDetails;
