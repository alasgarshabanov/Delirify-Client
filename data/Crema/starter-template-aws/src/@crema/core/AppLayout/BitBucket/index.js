import React, {useState} from 'react';
import AppSidebar from './AppSidebar';
import {ContentView} from '../../../index';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import useStyles from './index.style';

const BitBucket = props => {
  const [isCollapsed, setCollapsed] = useState(false);
  const classes = useStyles(props);

  return (
    <Box className={clsx(classes.appMain, {bitBucketCollapsed: isCollapsed})}>
      <Hidden lgUp>
        <AppHeader />
      </Hidden>
      <AppSidebar isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Box className={classes.mainContent}>
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
    </Box>
  );
};

export default BitBucket;
