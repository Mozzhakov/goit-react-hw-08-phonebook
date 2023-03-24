import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import css from './Styles/Header.module.css';

export const UserMenu = () => {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon className={css.userIcon} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Typography variant="h6" gutterBottom className={css.userEmail}>
          Welcome, {email}
        </Typography>
        <MenuItem
          onClick={handleLogOut}
          // className={css.userLogout}
          style={{ justifyContent: 'center' }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
