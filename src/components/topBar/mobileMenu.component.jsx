import React from 'react';
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ProfileItemsComponent from "./profileItems.component";


const MobileMenuComponent = props => {
  const {
    pass: {
      isLoggedIn, isMobileMenuOpen, mobileMenuId, mobileMoreAnchorEl,
      handleMobileMenuClose
    }
  } = props;

  return(
    <Menu
      id={mobileMenuId}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="inherit">
          <Link to='/feeds'>Articles</Link>
        </Button>
      </MenuItem>
      {!isLoggedIn && (
        <MenuItem>
          <Link to="/login">
            <LockOpenIcon aria-label="authentication page" color="inherit"/>
          </Link>
        </MenuItem>
      )}
      {isLoggedIn && (
        <div>
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <ProfileItemsComponent {...props} />
        </div>
      )}
    </Menu>
  );
};

export default MobileMenuComponent;
