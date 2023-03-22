import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/sliceFilter';
import PropTypes from 'prop-types';
import css from './Styles/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.filter__label}>
        Find contact by name
      </label>
      <input
        id="filter"
        type="text"
        onChange={handleChangeFilter}
        className={css.filter__input}
      />
    </div>
  );
};

Filter.prpoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
