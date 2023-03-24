import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import css from './Styles//Header.module.css';

export const Enterance = () => {
  return (
    <>
      <Link to="/login" className={css.userEnterLink}>
        <Button color="inherit">Sign in</Button>
      </Link>
      <Link to="/registration" className={css.userEnterLink}>
        <Button color="inherit">Sign up</Button>
      </Link>
    </>
  );
};
