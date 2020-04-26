import React, {useContext} from 'react';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './topBar.style';

import MobileMenu from './mobileMenu.component';
import SidebarMenu from './sidebarMenu.component';
import AppBarComponent from './appBar.component';
import ProfileMenuComponent from './profileMenu.component';
import menuAnchor from '../../hooks/menuAnchor.hook';
import {CurrentUserContext} from '../../contexts/providers/currentUser.context';

const TopBarComponent = props => {
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
        pass={{
          isLoggedIn, menuId, mobileMenuId, handleSidebarOpen,
          handleMobileMenuOpen, handleProfileMenuOpen, handleProfileMenuClose,
          currentUserState
        }}
        {...props}
      />
      <SidebarMenu
        pass={{ theme, classes, sidebarOpen, handleSidebarClose }}
        {...props}
      />
      <MobileMenu
        pass={{
          isLoggedIn, isMobileMenuOpen, mobileMenuId, mobileMoreAnchorEl,
          handleMobileMenuOpen, handleMobileMenuClose
        }}
        {...props}
      />
      {isLoggedIn && (
        <ProfileMenuComponent
          pass={{ menuId, isMenuOpen, anchorEl, handleProfileMenuClose, classes }}
          {...props}
        />
      )}
    </div>
  );
};

export default TopBarComponent;
