import React, { useState } from "react";
import {Button, Menu, MenuItem} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';

import { useAppContext, appActions } from '../../contexts/providers/app.context';

const LanguageComponent = props => {
  const [appState, dispatch] = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (ev) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleCloseMenu = (ev) => {
    setAnchorEl(null);
  };

  const handleLanguageSelection = (ev, lang) => {
    dispatch({
      type: appActions.ACTION_CHANGE_LANGUAGE,payload: { locale: lang }
    });
    handleCloseMenu(ev);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu" aria-haspopup="true"
        onClick={handleOpenMenu}
      >
        <LanguageIcon />
        {/*{appState.locale.toUpperCase()}*/}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {appState.languages.map((lang, index) => (
          <MenuItem
            key={lang.locale}
            onClick={(ev) => handleLanguageSelection(ev, lang.locale)}
          >
            {lang.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageComponent;
