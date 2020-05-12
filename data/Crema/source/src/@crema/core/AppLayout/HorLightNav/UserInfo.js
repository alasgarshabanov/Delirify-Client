import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {useDispatch, useSelector} from 'react-redux';
import {
  onCognitoUserSignOut,
  onSignOutAuth0User,
  onSignOutFirebaseUser,
} from '../../../../redux/actions';
import {useAuthUser} from '@crema/utility/AppHooks';
import AppContext from '@crema/utility/AppContext';
import {makeStyles} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import {orange} from '@material-ui/core/colors';

const UserInfo = props => {
  const {themeMode} = useContext(AppContext);
  const firebaseUser = useSelector(({firebaseAuth}) => firebaseAuth.user);
  const awsCognitoUser = useSelector(({awsCognito}) => awsCognito.user);
  const auth0User = useSelector(({auth0User}) => auth0User.user);
  const dispatch = useDispatch();
  const user = useAuthUser();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };
  const useStyles = makeStyles(theme => {
    return {
      avatar: {
        height: 40,
        width: 40,
        fontSize: 24,
        backgroundColor: orange[500],
        [theme.breakpoints.up('xl')]: {
          height: 55,
          width: 55,
        },
      },
      userInfo: {
        width: 'calc(100% - 75px)',
      },
      userName: {
        color: themeMode === 'light' ? '#313541' : 'white',
      },
      pointer: {
        cursor: 'pointer',
      },
    };
  });

  const classes = useStyles(props);

  return (
    <Box py={4}>
      <Box className={classes.pointer} onClick={handleClick}>
        {user.photoURL ? (
          <Avatar className={classes.avatar} src={user.photoURL} />
        ) : (
          <Avatar className={classes.avatar}>{getUserAvatar()}</Avatar>
        )}
      </Box>
      <Box className={classes.userInfo}>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem>My account</MenuItem>
          <MenuItem
            onClick={() => {
              if (awsCognitoUser) {
                dispatch(onCognitoUserSignOut());
              }
              if (firebaseUser) {
                dispatch(onSignOutFirebaseUser());
              }
              if (auth0User) {
                dispatch(onSignOutAuth0User());
              }
            }}>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default UserInfo;
