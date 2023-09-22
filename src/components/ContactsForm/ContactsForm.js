import { ErrorMessage, Field, Formik } from 'formik';
import { FiUserPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import {
  StyledForm,
  Wrapper,
  Button,
  InputWrapper,
} from './ContactsForm.styled';
import { PatternFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/thunk';
import { selectContacts } from 'redux/selectors';
import { TextField } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// ====== Validation ========= //
const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().required('* Phone number is required'),
});

const initialValues = { name: '', number: '' };

export const ContactsForm = () => {
  const allcontacts = useSelector(selectContacts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (allcontacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contacts`);
    }

    if (allcontacts.find(contact => contact.number === values.number)) {
      return alert(`${values.number} is already in contacts`);
    }

    dispatch(addNewContact({ ...values }));
    navigate('/');

    toast.success(
      <div>
        <b>{values.name}</b> added in phonebook
      </div>,
      {
        duration: 4000,
        icon: '✅',
      }
    );
    resetForm();
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <InputWrapper>
            <PersonOutlineIcon />
            <Field
              as={TextField}
              label="Name"
              name="name"
              multiline
              variant="standard"
              className="fieldName"
            />
          </InputWrapper>
          <ErrorMessage name="name" component="span" style={{ color: 'red' }} />

          <InputWrapper>
            <PhoneEnabledIcon />
            <Field
              as={PatternFormat}
              customInput={TextField}
              name="number"
              variant="standard"
              format="+38 (0##) ### ## ##"
              allowEmptyFormatting={true}
              mask="_"
            />
          </InputWrapper>
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: 'red' }}
          />

          <Button type="submit">
            <FiUserPlus size={26} />
          </Button>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};
