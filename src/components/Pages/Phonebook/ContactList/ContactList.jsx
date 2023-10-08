import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../../../redux/filter/selectors.js';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactList.module.css';
import { Button } from '@mui/material';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.wrapper}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{' '}
          <Button
            size="small"
            variant="contained"
            color="primary"
            type="button"
            onClick={() => deleteSelectedContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
