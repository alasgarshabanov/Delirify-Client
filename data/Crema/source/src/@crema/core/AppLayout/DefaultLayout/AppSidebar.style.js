import {makeStyles} from '@material-ui/core';
import {useContext} from 'react';
import AppContext from '../../../utility/AppContext';
import {ThemeMode, ThemeStyle} from '../../../../shared/constants/AppEnums';

const useStyles = makeStyles(theme => {
  const {themeStyle, themeMode} = useContext(AppContext);
  return {
    container: {
      maxHeight: '100vh',
      paddingLeft: themeStyle === ThemeStyle.MODERN ? 30 : 0,
      paddingTop: themeStyle === ThemeStyle.MODERN ? 30 : 0,
      paddingBottom: themeStyle === ThemeStyle.MODERN ? 30 : 0,
      width: themeStyle === ThemeStyle.MODERN ? '19rem' : '19rem',
      [theme.breakpoints.up('xl')]: {
        width: themeStyle === ThemeStyle.MODERN ? '22.8rem' : '21.6rem',
      },
    },
    drawerContainer: {
      maxHeight: '100vh',
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      width: '19rem',
      [theme.breakpoints.up('xl')]: {
        width: '21.6rem',
      },
    },
    sidebarBg: {
      overflow: 'hidden',
      backgroundColor:
        themeMode === ThemeMode.SEMI_DARK
          ? theme.palette.sidebar.bgColor
          : themeMode === ThemeMode.LIGHT
          ? 'white'
          : '#313541',
    },
    scrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 8,
      height:
        themeStyle === ThemeStyle.MODERN
          ? 'calc(100vh - 210px) !important'
          : 'calc(100vh - 150px) !important',
      [theme.breakpoints.up('xl')]: {
        height:
          themeStyle === ThemeStyle.MODERN
            ? 'calc(100vh - 260px) !important'
            : 'calc(100vh - 200px) !important',
      },
    },
    drawerScrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 20,
      height: 'calc(100vh - 90px) !important',
    },

    sidebarModern: {
      height: '100%',
      width: '100%',
      color: 'white',
      paddingTop: 16,
      paddingBottom: 16,
      overflow: 'hidden',
      borderRadius: 30,
      [theme.breakpoints.up('xl')]: {
        paddingTop: 24,
        paddingBottom: 24,
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
