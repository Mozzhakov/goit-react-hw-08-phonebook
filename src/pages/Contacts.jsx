import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { getIsLoading } from 'redux/selectors';
import { getError } from 'redux/selectors';
import Typography from '@mui/material/Typography';
import css from '../components/Styles/Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h3" gutterBottom className={css.contactsTitle}>
        Phonebook
      </Typography>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
}
