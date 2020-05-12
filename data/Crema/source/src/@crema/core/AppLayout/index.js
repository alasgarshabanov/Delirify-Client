import React, {useContext} from 'react';
import {useSelector} from 'react-redux';

import AppContext from '../../utility/AppContext';
import Layouts from './Layouts';
import {ContentView} from '../../index';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import BG from '../../../assets/images/auth-background.jpg';
import useStyles from '../../../shared/jss/common/common.style';

const useStyle = makeStyles(() => ({
  appAuth: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    height: '100vh',
    backgroundColor: '#f3f4f6',
    background: `url(${BG}) no-repeat center center`,
    backgroundSize: 'cover',

    '& .scrollbar-container': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    '& .main-content-view': {
      padding: 20,
    },
    '& .footer': {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CremaLayout = ({children}) => {
  useStyles();
  const {navStyle} = useContext(AppContext);
  const firebaseUser = useSelector(({firebaseAuth}) => firebaseAuth.user);
  const awsCognitoUser = useSelector(({awsCognito}) => awsCognito.user);
  const auth0User = useSelector(({auth0User}) => auth0User.user);
  const jwtAuthUser = useSelector(({jwtAuth}) => jwtAuth.user);
  const authUser = awsCognitoUser || firebaseUser || auth0User || jwtAuthUser;
  const AppLayout = Layouts[navStyle];

  const classes = useStyle();
  return (
    <>
      {authUser ? (
        <AppLayout>{children}</AppLayout>
      ) : (
        <Box className={classes.appAuth}>
          <ContentView />
        </Box>
      )}
    </>
  );
};

export default React.memo(CremaLayout);
