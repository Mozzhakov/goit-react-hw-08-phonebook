import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import { useNotify } from 'hooks/useNotify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './Styles/ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const { showFailure } = useNotify();

  const addNewContact = (name, number) => {
    const condition = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (condition) {
      return showFailure(`${name} is already in contacts!`);
    }
    const newContact = {
      name: name,
      number: number,
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
        {/* <div className={css.contactForm__part}> */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          type="text"
          name="name"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          autoComplete="name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="number"
          type="tel"
          name="number"
          label="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          autoComplete="tel"
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
    </>
  );
};
