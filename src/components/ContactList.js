import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import { getContacts, getQueryFilter } from 'redux/selectors';
import css from './Styles/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getQueryFilter);

  const getFilteredContacts = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.contactList}>
      {contacts &&
        filteredContacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
    </ul>
  );
};
