import {makeStyles} from '@material-ui/core';
import {useContext} from 'react';
import AppContext from '../../../utility/AppContext';
import {ThemeMode} from '../../../../shared/constants/AppEnums';

const useStyles = makeStyles(theme => {
  const {themeMode} = useContext(AppContext);
  return {
    container: {
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '19rem',
      maxHeight: '100vh',
      [theme.breakpoints.up('xl')]: {
        width: '21.6rem',
      },
    },
    sidebarBg: {
      backgroundColor:
        themeMode === ThemeMode.SEMI_DARK
          ? theme.palette.sidebar.bgColor
          : themeMode === ThemeMode.LIGHT
          ? 'white'
          : '#313541',
    },
    scrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 20,
      height: 'calc(100vh - 85px) !important',

      [theme.breakpoints.up('xl')]: {
        height: 'calc(100vh - 102px) !important',
      },
    },
    drawerScrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 20,
      height: 'calc(100vh - 85px) !important',

      [theme.breakpoints.up('xl')]: {
        height: 'calc(100vh - 102px) !important',
      },
    },
    sidebarStandard: {
      height: '100%',
      width: '100%',
      color: 'white',
      paddingTop: 16,
      paddingBottom: 16,
      overflow: 'hidden',
      [theme.breakpoints.up('xl')]: {
        paddingTop: 24,
        paddingBottom: 24,
      },
    },
  };
});
export default useStyles;
