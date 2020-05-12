import React, {useContext} from 'react';
import AppHeader from './AppHeader';
import {ContentView} from '../../../index';
import Box from '@material-ui/core/Box';
import useStyles from './index.style';
import clsx from 'clsx';
import AppFooter from './AppFooter';
import AppFixedFooter from './AppFixedFooter';
import AppContext from '../../../utility/AppContext';
import AppSidebar from './AppSidebar';

const HorDarkLayout = props => {
  const classes = useStyles(props);
  const {footer, footerType} = useContext(AppContext);

  return (
    <Box
      className={clsx(classes.appMain, 'appMainHor', {
        appMainFooter: footer && footerType === 'fluid',
        appMainFixedFooter: footer && footerType === 'fixed',
      })}>
      <AppHeader />
      <Box className={classes.mainContent}>
        <AppSidebar />
        <Box className={classes.mainContainer}>
          <ContentView />
        </Box>
      </Box>
      <AppFooter />
      <AppFixedFooter />
    </Box>
  );
};

export default HorDarkLayout;
