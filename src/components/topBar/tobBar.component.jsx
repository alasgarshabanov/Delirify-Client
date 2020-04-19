import React, {useContext} from 'react';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './topBar.style';

import {CurrentUserContext} from '../../contexts/currentUser.context';
import MobileMenu from './mobileMenu.component';
import SidebarMenu from './sidebarMenu.component';
import AppBarComponent from './appBar.component';
import ProfileMenuComponent from './profileMenu.component';
import menuAnchor from '../../hooks/menuAnchor.hook';

const TopBar = props => {
  const theme = useTheme;
  const classes = useStyles(theme);
  const [
    { anchorEl, mobileMoreAnchorEl, sidebarOpen},
    handleMobileMenuOpen,handleMobileMenuClose,
    handleProfileMenuOpen,handleProfileMenuClose,
    handleSidebarOpen, handleSidebarClose
  ] = menuAnchor();
  const [currentUserState] = useContext(CurrentUserContext);
  const {isLoggedIn} = currentUserState;

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  return (
    <div className={classes.grow}>
      <AppBarComponent
        props={{
          ...props, isLoggedIn, menuId, mobileMenuId, handleSidebarOpen,
          handleMobileMenuOpen, handleProfileMenuOpen, handleProfileMenuClose,
          currentUserState
        }}
      />
      <SidebarMenu
        props={{
          ...props, theme, classes, sidebarOpen, handleSidebarClose,
        }}
      />
      <MobileMenu
        isLoggedIn={isLoggedIn}
        isMobileMenuOpen={isMobileMenuOpen} mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
      />
      {isLoggedIn && (
        <ProfileMenuComponent
          menuId={menuId} isMenuOpen={isMenuOpen}
          anchorEl={anchorEl} handleProfileMenuClose={handleProfileMenuClose}
        />
      )}
    </div>
  );
};

export default TopBar;
