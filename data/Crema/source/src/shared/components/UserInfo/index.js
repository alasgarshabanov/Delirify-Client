import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {useDispatch, useSelector} from 'react-redux';
import {
  onCognitoUserSignOut,
  onJWTAuthSignout,
  onSignOutAuth0User,
  onSignOutFirebaseUser,
} from '../../../redux/actions';
import {useAuthUser} from '../../../@crema/utility/AppHooks';
import AppContext from '../../../@crema/utility/AppContext';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import {grey, orange} from '@material-ui/core/colors';
import {Fonts} from '../../constants/AppEnums';

const UserInfo = props => {
  const {themeMode} = useContext(AppContext);
  const dispatch = useDispatch();
  const firebaseUser = useSelector(({firebaseAuth}) => firebaseAuth.user);
  const awsCognitoUser = useSelector(({awsCognito}) => awsCognito.user);
  const auth0User = useSelector(({auth0User}) => auth0User.user);
  const jwtAuthUser = useSelector(({jwtAuth}) => jwtAuth.user);
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
      profilePic: {
        height: 45,
        width: 45,
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
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: 18,
        fontFamily: Fonts.MEDIUM,
        [theme.breakpoints.up('xl')]: {
          fontSize: 20,
        },
        color: themeMode === 'light' ? '#313541' : 'white',
      },
      pointer: {
        cursor: 'pointer',
      },
      adminRoot: {
        color: grey[500],
        fontSize: 16,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    };
  });

  const classes = useStyles(props);

  return (
    <Box px={{xs: 4, xl: 7}} className='cr-user-info'>
      <Box
        pb={5}
        display='flex'
        alignItems='center'
        borderBottom={`1px solid ${grey[700]}`}>
        {user.photoURL ? (
          <Avatar className={classes.profilePic} src={user.photoURL} />
        ) : (
          <Avatar className={classes.profilePic}>{getUserAvatar()}</Avatar>
        )}
        <Box ml={4} className={clsx(classes.userInfo, 'user-info')}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'>
            <Box mb={1} className={clsx(classes.userName)}>
              {user.displayName ? user.displayName : user.email}
            </Box>
            <Box
              ml={3}
              className={classes.pointer}
              color={themeMode === 'light' ? '#313541' : 'white'}>
              <ExpandMoreIcon onClick={handleClick} />
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
                    if (jwtAuthUser) {
                      dispatch(onJWTAuthSignout());
                    }
                  }}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box className={classes.adminRoot}>Admin Manager</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
