import React, { useRef } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-hot-toast';
import { Box, Stack, TextField, Button } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputRef = useRef();
  const numberInputRef = useRef();

  const isContactNameExists = name => {
    return contacts.some(contact => contact.name === name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameInputRef.current.value.trim();
    const number = numberInputRef.current.value.trim();

    if (isContactNameExists(name)) {
      toast.error(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }

    nameInputRef.current.value = '';
    numberInputRef.current.value = '';
  };

  return (
    <div className={css.wrapper}>
      <Box onSubmit={handleSubmit} component="form" autoComplete="off">
        <Stack direction={'column'} spacing={3}>
          <TextField
            fullWidth
            required
            label="Name"
            type="text"
            name="name"
            color="primary"
            inputRef={nameInputRef}
          />
          <TextField
            fullWidth
            required
            label="Number"
            type="tel"
            name="number"
            color="primary"
            inputRef={numberInputRef}
          />
          <Button variant="contained" color="primary" type="submit">
            Add contact
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
