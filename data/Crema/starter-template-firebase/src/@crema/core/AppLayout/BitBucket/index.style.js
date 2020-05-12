import {makeStyles} from '@material-ui/core';
import {useContext} from 'react';
import AppContext from '../../../utility/AppContext';

const useStyles = makeStyles(theme => {
  const {footer} = useContext(AppContext);
  return {
    appMain: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      backgroundColor: theme.palette.background.default,
      paddingTop: 64,

      [theme.breakpoints.up('lg')]: {
        paddingTop: 0,
      },
      '&.bitBucketCollapsed': {
        '& $mainContent': {
          position: 'relative',
          '& $mainContainer': {
            width: 'calc(100vw - 4.3rem)',
          },
        },
        '& .bit-bucket-sidebar': {
          width: '4.3rem',
          '& .app-sidebar-container': {
            width: '1rem',
          },
        },
      },
    },
    mainContent: {
      flex: 1,
      display: 'flex',
    },
    mainContainer: {
      width: `calc(100vw - 19rem)`,
      paddingBottom: footer ? 0 : 10,
      transition: 'all 0.5s ease',

      [theme.breakpoints.up('xl')]: {
        width: `calc(100vw - 21.6rem)`,
      },
      '& > .scrollbar-container': {
        padding: '20px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          padding: '30px 32px 0',
        },
        '& .scroll-app': {
          height: 'calc(100vh - 162px) !important',
          [theme.breakpoints.up('xl')]: {
            height: 'calc(100vh - 220px) !important',
          },
        },
        '& .scroll-app-detail': {
          height: 'calc(100vh - 162px) !important',
          [theme.breakpoints.up('xl')]: {
            height: 'calc(100vh - 220px) !important',
          },
        },
        '& .scroll-app-sidebar': {
          height: 'calc(100vh - 182px) !important',
          [theme.breakpoints.up('xl')]: {
            height: 'calc(100vh - 246px) !important',
          },
        },
      },
      '& .scrum-relative': {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'calc(100vh - 140px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 156px) !important',
        },
        [theme.breakpoints.up('lg')]: {
          height: 'calc(100vh - 108px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 140px) !important',
        },
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
        width: '280px',
        marginLeft: '10px',
        marginRight: '10px',
        borderRadius: theme.overrides.MuiCard.root.borderRadius,
        height: 'calc(100vh - 140px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 156px) !important',
          width: '354px',
        },
        [theme.breakpoints.up('lg')]: {
          height: 'calc(100vh - 108px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 140px) !important',
        },
      },
      '& .scroll-scrum-item': {
        height: 'auto !important',
      },
    },
    mainContainerFull: {
      width: '100vw',
      paddingBottom: 10,
      '& > .scrollbar-container': {
        padding: '20px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          padding: '30px 32px 0',
        },
        '& .scroll-app': {
          height: 'calc(100vh - 270px) !important',
          [theme.breakpoints.up('sm')]: {
            height: 'calc(100vh - 220px) !important',
          },
          [theme.breakpoints.up('md')]: {
            height: 'calc(100vh - 230px) !important',
          },
        },
        '& .scroll-app-detail': {
          height: 'calc(100vh - 220px) !important',
          [theme.breakpoints.up('md')]: {
            height: 'calc(100vh - 239px) !important',
          },
        },
      },
      '& .scrum-relative': {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'calc(100vh - 140px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 156px) !important',
        },
        [theme.breakpoints.up('lg')]: {
          height: 'calc(100vh - 108px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 140px) !important',
        },
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
        width: '280px',
        marginLeft: '10px',
        marginRight: '10px',
        borderRadius: theme.overrides.MuiCard.root.borderRadius,
        height: 'calc(100vh - 140px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 156px) !important',
          width: '354px',
        },
        [theme.breakpoints.up('lg')]: {
          height: 'calc(100vh - 108px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 140px) !important',
        },
      },
      '& .scroll-scrum-item': {
        height: 'auto !important',
      },
    },
  };
});
export default useStyles;
