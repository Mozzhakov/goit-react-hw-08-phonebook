import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import css from './Styles/ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addNewContact = (name, number) => {
    const condition = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (condition) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      createdAt: Date.now().toString(),
      name: name,
      phone: number,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.target;
    addNewContact(form.elements.name.value, form.elements.number.value);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className={css.contactForm}>
        <div className={css.contactForm__part}>
          <label htmlFor="name" className={css.contactForm__label}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.contactForm__input}
          />
        </div>
        <div className={css.contactForm__part}>
          <label htmlFor="number" className={css.contactForm__label}>
            Number
          </label>
          <input
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.contactForm__input}
          />
        </div>
        <button type="submit" className={css.contactForm__btn}>
          Add contact
        </button>
      </form>
    </>
  );
};
