import React, {useContext} from "react";
import { withRouter } from 'react-router-dom';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { AssignmentInd, Settings, ExitToApp } from "@material-ui/icons";

import { currentUserActions, CurrentUserContext } from "../../contexts/providers/currentUser.context";

const ProfileItemsComponent = props => {
  const {pass: {
    menuId, handleProfileMenuClose
  }} = props;
  const { history } = props;
  const isMobile = menuId === 'primary-search-account-menu-mobile';
  const [, dispatch] = useContext(CurrentUserContext);

  const handleProfileItemClick = (ev, url) => {
    history.push(url);
    if (!isMobile) handleProfileMenuClose();
  };

  const handleLogOut = () => {
    dispatch({ type: currentUserActions.LOG_OUT });
    if (!isMobile) handleProfileMenuClose();
  };

  return(
    <>
      <MenuItem
        onClick={(ev) => handleProfileItemClick(ev, '/profile')}
      >
        <IconButton aria-label="Profile Info" color="inherit">
          <AssignmentInd />
        </IconButton>
        Profile
      </MenuItem>
      <MenuItem
        onClick={(ev) => handleProfileItemClick(ev, '/settings')}
      >
        <IconButton aria-label="User Settings" color="inherit">
          <Settings />
        </IconButton>
        My account
      </MenuItem>
      <MenuItem onClick={handleLogOut}>
        <IconButton aria-label="LogOut" color="inherit">
          <ExitToApp />
        </IconButton>
        Log Out
      </MenuItem>
    </>
  );
};

export default withRouter(ProfileItemsComponent);
