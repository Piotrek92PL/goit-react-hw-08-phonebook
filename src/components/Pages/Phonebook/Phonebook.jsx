import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from '../../../redux/contacts/operations';
import {
  selectError,
  selectLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();

  const { loading, error, allContacts, filter } = useSelector(state => ({
    loading: selectLoading(state),
    error: selectError(state),
    allContacts: selectContacts(state) || [],
    filter: state.contacts.filter,
  }));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = allContacts.filter(
    contact =>
      contact &&
      contact.name &&
      filter &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!allContacts.length) {
    return <div className={css.message}>Loading...</div>;
  }

  const renderContent = () => {
    if (loading) return <b className={css.message}>Request in progress...</b>;
    if (filteredContacts.length === 0) {
      return (
        <p className={css.message}>
          The Phonebook is empty. Add your first contact.
        </p>
      );
    }
    return <ContactList contacts={filteredContacts} />;
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Phonebook</title>
      </Helmet>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {!error && renderContent()}
    </HelmetProvider>
  );
}
