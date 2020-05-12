import React, {useContext} from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {ContentView, ThemeSetting} from '../../../index';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import useStyles from './index.style';
import clsx from 'clsx';
import AppContext from '../../../utility/AppContext';
import AppFixedFooter from './AppFixedFooter';

const StandardLayout = props => {
  const classes = useStyles(props);
  const {footer, footerType} = useContext(AppContext);

  return (
    <Box
      className={clsx(classes.appMain, {
        appMainFooter: footer && footerType === 'fluid',
        appMainFixedFooter: footer && footerType === 'fixed',
      })}>
      <AppSidebar />

      <Box className={classes.mainContent}>
        <Hidden mdDown>
          <Box className={classes.mainContainer}>
            <AppHeader />
            <ContentView />
            <AppFixedFooter />
          </Box>
        </Hidden>

        <Hidden lgUp>
          <Box className={classes.mainContainerFull}>
            <AppHeader />
            <ContentView />
            <AppFixedFooter />
          </Box>
        </Hidden>
      </Box>
      <ThemeSetting />
    </Box>
  );
};

export default StandardLayout;
