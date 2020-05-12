import React, {useContext} from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {ContentView, ThemeSetting} from '../../../index';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import useStyles from './index.style';
import AppFixedFooter from './AppFixedFooter';
import clsx from 'clsx';
import AppContext from '../../../utility/AppContext';

const DefaultLayout = props => {
  const classes = useStyles(props);
  const {footer, footerType} = useContext(AppContext);

  return (
    <Box
      className={clsx(classes.appMain, {
        appMainFooter: footer && footerType === 'fluid',
        appMainFixedFooter: footer && footerType === 'fixed',
      })}>
      <AppHeader />
      <Box className={classes.mainContent}>
        <AppSidebar />

        <Hidden mdDown>
          <Box className={classes.mainContainer}>
            <ContentView />
          </Box>
        </Hidden>

        <Hidden lgUp>
          <Box className={classes.mainContainerFull}>
            <ContentView />
          </Box>
        </Hidden>
      </Box>
      <AppFixedFooter />
      <ThemeSetting />
    </Box>
  );
};

export default DefaultLayout;
