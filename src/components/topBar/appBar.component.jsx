import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import useStyles from './topBar.style';

const AppBarComponent = ({props}) => {
  const classes = useStyles();
  const {
    isLoggedIn, menuId, mobileMenuId, sidebarOpen,
    handleMobileMenuOpen, handleProfileMenuOpen, handleProfileMenuClose,
    handleSidebarOpen, currentUserState
  } = props;
  console.log('CIc ', currentUserState);
  const mobileMenuToggle = useRef(null);
  const desktopMenuToggle = useRef(null);

    return(
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open sidebar"
            onClick={handleSidebarOpen}
            className={clsx(classes.appBar, {
              [classes.appBarShift]: sidebarOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.headerNavLinks}>
            <Typography className={classes.title} variant="h6" noWrap>
               Delirify
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop} >
            <Button onClick={handleProfileMenuClose} color="inherit">
              <Link to='/feeds'  className={classes.headerNavLinks}>Comments</Link>
            </Button>
            {!isLoggedIn && (
              <IconButton
                edge="end"
                aria-label="logg in"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <Link to="/login"  className={classes.headerNavLinks}>
                  <LockOpenIcon aria-label="authentication page" color="inherit"></LockOpenIcon>
                </Link>
              </IconButton>
            )}
            {isLoggedIn && (
              <>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  ref={desktopMenuToggle}
                  onClick={(ev) => handleProfileMenuOpen(ev, desktopMenuToggle)}
                  color="inherit"
                >
                  { currentUserState.currentUser.image
                    ? <Avatar alt="User Memmed" src={currentUserState.currentUser.image} />
                    : <AccountCircle />
                  }
                </IconButton>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              ref={mobileMenuToggle}
              onClick={(ev) => handleMobileMenuOpen(ev, mobileMenuToggle)}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
};

export default AppBarComponent;
