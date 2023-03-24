import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { UserMenu } from 'components/UserMenu';
import { Enterance } from 'components/Enterance';
import css from '../components/Styles/Header.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" className={css.navLink}>
              Phonebook
            </NavLink>
          </Typography>
          {isLoggedIn ? <UserMenu /> : <Enterance />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
