import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateContact, updatePhonebook } from 'redux/contactsSlice';
import {
  StyledForm,
  Wrapper,
  Button,
  InputWrapper,
} from './ContactEdit.styled';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { PatternFormat } from 'react-number-format';
import { TextField } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import toast from 'react-hot-toast';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().required('* Phone number is required'),
});

const ContactEdit = () => {
  const allcontacts = useSelector(updatePhonebook);
  const { id } = useParams();
  const currentContact = allcontacts.find(contact => contact.id === id);

  const dispatch = useDispatch();

  const initialValues = {
    name: currentContact ? currentContact.name : '',
    number: currentContact ? currentContact.number : '',
  };

  const handleSubmit = values => {
    if (allcontacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contacts`);
    }

    if (allcontacts.find(contact => contact.number === values.number)) {
      return alert(`${values.number} is already in contacts`);
    }

    const updatedContact = { name: values.name, number: values.number, id };

    dispatch(updateContact(updatedContact));

    toast.success(
      <div>
        Contact <b>{values.name}</b> updated!
      </div>,
      {
        duration: 4000,
        icon: '✅',
      }
    );
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
            <PersonOutlineIcon sx={{ fontSize: 36 }} />
            <Field
              as={TextField}
              label="Name"
              name="name"
              multiline
              variant="standard"
              style={{ width: '300px' }}
              className="fieldName"
            />
          </InputWrapper>
          <ErrorMessage name="name" component="span" style={{ color: 'red' }} />

          <InputWrapper>
            <PhoneEnabledIcon sx={{ fontSize: 36 }} />
            <Field
              as={PatternFormat}
              customInput={TextField}
              name="number"
              variant="standard"
              style={{ width: '300px' }}
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

          <Button type="submit">Edit</Button>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};

export default ContactEdit;
