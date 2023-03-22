import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Filter } from './Filter';
import css from './Styles/App.module.css';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};
