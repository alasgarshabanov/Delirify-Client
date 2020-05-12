import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    appMain: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundColor: theme.palette.background.default,
      '&.appMainHor': {
        '& .customizerOption': {
          position: 'fixed',
          top: 205,
          [theme.breakpoints.up('xl')]: {
            top: 225,
          },
        },
        '&.appMainFixedFooter': {
          paddingBottom: 48,
          [theme.breakpoints.up('xl')]: {
            paddingBottom: 58,
          },
          '& .footer': {
            borderTop: 'solid 1px',
            borderTopColor: theme.palette.grey[200],
          },
        },
      },
      '& .footer': {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        [theme.breakpoints.up('md')]: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
      '& .footerContainer': {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 16,
        paddingRight: 16,
        [theme.breakpoints.up('lg')]: {
          maxWidth: 1140,
        },
        [theme.breakpoints.up('xl')]: {
          maxWidth: 1720,
        },
      },
    },
    mainContent: {
      flex: 1,
      display: 'flex',
    },
    mainContainer: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1140,
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: 1720,
      },
      '& > .scrollbar-container': {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          padding: '30px 20px',
        },
        '& > div': {
          marginBottom: 0,
        },
      },
      '& .scroll-app-sidebar': {
        height: 'calc(100vh - 302px) !important',
      },
      '& .scroll-app': {
        height: 'calc(100vh - 282px) !important',
      },
      '& .scroll-app-detail': {
        height: 'calc(100vh - 282px) !important',
      },
      '& .scrum-relative': {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'calc(100vh - 234px) !important',
      },
      '& .scrum-absolute': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      },
      '& .scrum-row': {
        display: 'inline-flex',
        minWidth: '100%',
        marginLeft: '-10px',
        marginRight: '-10px',
      },
      '& .scrum-col': {
        height: 'calc(100vh - 234px) !important',
        width: '354px',
        marginLeft: '10px',
        marginRight: '10px',
        borderRadius: theme.overrides.MuiCard.root.borderRadius,
      },
    },
  };
});
export default useStyles;
