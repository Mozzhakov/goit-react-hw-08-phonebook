import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/sliceFilter';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import css from './Styles/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="filter"
        type="text"
        name="name"
        label="Find contact by name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        autoComplete="name"
        onChange={handleChangeFilter}
        style={{ width: '400px' }}
      />
    </div>
  );
};

Filter.prpoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
