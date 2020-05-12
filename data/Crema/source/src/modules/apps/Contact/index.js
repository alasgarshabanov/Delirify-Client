import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Card from '@material-ui/core/Card';
import InfoView from '@crema/core/InfoView';
import {
  onGetFolderList,
  onGetLabelList,
  onToggleContactDrawer,
} from '../../../redux/actions/ContactApp';
import ContactSideBar from './ContactSideBar';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ContactListing from './ContactListing';
import {Fonts} from '../../../shared/constants/AppEnums';

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetLabelList());
  }, [dispatch]);

  const useStyles = makeStyles(theme => ({
    appsContainer: {
      display: 'flex',
    },
    appsSidebar: {
      [theme.breakpoints.up('lg')]: {
        width: '17rem',
      },
      [theme.breakpoints.up('xl')]: {
        width: '20rem',
      },
    },
    appsMainContent: {
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: 'calc(100% - 17rem)',
        paddingLeft: 40,
      },
      [theme.breakpoints.up('xl')]: {
        width: 'calc(100% - 20rem)',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
      width: 35,
      height: 35,
    },
  }));

  const classes = useStyles();

  return (
    <Box pt={{xl: 4}} flex={1} display='flex' flexDirection='column'>
      <Box
        mb={{xs: 2, lg: 4, xl: 6}}
        mt={{xs: -3, lg: 0}}
        display='flex'
        alignItems='center'>
        <Hidden lgUp>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={() => dispatch(onToggleContactDrawer())}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Hidden>
        <Box
          component='h2'
          color='text.primary'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='contactApp.contact' />
        </Box>
      </Box>

      <Box className={classes.appsContainer}>
        <Box className={classes.appsSidebar}>
          <ContactSideBar />
        </Box>

        <Box className={classes.appsMainContent}>
          <Card>
            <ContactListing />
          </Card>
          <InfoView />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
