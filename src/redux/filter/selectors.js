import { selectContacts } from '../contacts/selectors';

export const selectFilter = state => state.filter.status;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const contactsFilter = selectFilter(state);

  if (contactsFilter === '') {
    return contacts;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );
  return filteredContacts;
};
