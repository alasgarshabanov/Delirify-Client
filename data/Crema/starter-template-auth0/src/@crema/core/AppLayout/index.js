import React, {useContext} from 'react';
import {useSelector} from 'react-redux';

import AppContext from '../../utility/AppContext';
import Layouts from './Layouts';
import {ContentView} from '../../index';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import useStyles from '../../../shared/jss/common/common.style';

const useStyle = makeStyles(theme => ({
  appAuth: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    height: '100vh',
    backgroundColor: theme.palette.background.default,

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

const HipsterLayout = ({children, ...props}) => {
  useStyles();
  const {navStyle} = useContext(AppContext);
  const authUser = useSelector(({auth}) => auth.user);
  const AppLayout = Layouts[navStyle];

  const classes = useStyle(props);
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

export default React.memo(HipsterLayout);
