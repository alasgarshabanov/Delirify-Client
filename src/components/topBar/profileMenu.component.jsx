import React from 'react';
import Menu from '@material-ui/core/Menu';
import ProfileItemsComponent from "./profileItems.component";


const ProfileMenuComponent = props => {
  const {
    pass: { anchorEl, handleProfileMenuClose, menuId, isMenuOpen }
  } = props;

  return(
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
      getContentAnchorEl={null}
    >
      <div>
        <ProfileItemsComponent { ...props } />
      </div>
    </Menu>
  );
};

export default ProfileMenuComponent;
