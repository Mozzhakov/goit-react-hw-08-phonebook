import { useDispatch } from 'react-redux';
import css from './Styles/ContactList.module.css';
// import { deleteContact } from 'redux/sliceContacts';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={css.contactList__item}>
      {name}: {number}
      <Button variant="contained" onClick={handleDelete}>
        <DeleteIcon />
      </Button>
    </li>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
