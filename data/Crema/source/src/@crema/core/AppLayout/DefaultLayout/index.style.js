import {makeStyles} from '@material-ui/core';
import {useContext} from 'react';
import AppContext from '../../../utility/AppContext';

const useStyles = makeStyles(theme => {
  const {themeStyle, footer} = useContext(AppContext);
  return {
    appMain: {
      height: '100vh',
      display: 'flex',
      position: 'relative',
      paddingTop: 64,
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up('xl')]: {
        paddingTop: 88,
      },
      '&.appMainFooter': {
        '& $mainContainer': {
          '& .scroll-app, & .scroll-app-detail': {
            height: 'calc(100vh - 287px) !important',
            [theme.breakpoints.up('lg')]: {
              height: 'calc(100vh - 282px) !important',
            },
            [theme.breakpoints.up('xl')]: {
              height: 'calc(100vh - 360px) !important',
            },
          },
          '& .scroll-app-sidebar': {
            height: 'calc(100vh - 306px) !important',
            [theme.breakpoints.up('lg')]: {
              height: 'calc(100vh - 302px) !important',
            },
            [theme.breakpoints.up('xl')]: {
              height: 'calc(100vh - 392px) !important',
            },
          },
          '& .scrum-relative, & .scrum-col': {
            [theme.breakpoints.up('lg')]: {
              height: 'calc(100vh - 218px) !important',
            },
            [theme.breakpoints.up('xl')]: {
              height: 'calc(100vh - 280px) !important',
            },
          },
        },
        '& $mainContainerFull': {
          '& .scroll-app': {
            height: 'calc(100vh - 340px) !important',
            [theme.breakpoints.up('sm')]: {
              height: 'calc(100vh - 286px) !important',
            },
            [theme.breakpoints.up('md')]: {
              height: 'calc(100vh - 296px) !important',
            },
          },
          '& .scroll-app-detail': {
            height: 'calc(100vh - 286px) !important',
            [theme.breakpoints.up('md')]: {
              height: 'calc(100vh - 305px) !important',
            },
          },
          '& .scrum-relative, & .scrum-col': {
            height: 'calc(100vh - 204px) !important',
            [theme.breakpoints.up('md')]: {
              height: 'calc(100vh - 214px) !important',
            },
          },
        },
      },
      '&.appMainFixedFooter': {
        paddingBottom: 48,
        [theme.breakpoints.up('xl')]: {
          paddingBottom: 58,
        },
        '& .scrollAppSidebar': {
          height:
            themeStyle === 'Modern'
              ? 'calc(100vh - 260px) !important'
              : 'calc(100vh - 198px) !important',
          [theme.breakpoints.up('xl')]: {
            height:
              themeStyle === 'Modern'
                ? 'calc(100vh - 300px) !important'
                : 'calc(100vh - 236px) !important',
          },
        },
        '& $mainContainer': {
          paddingBottom: 1,
          '& .scroll-app, & .scroll-app-detail': {
            height: 'calc(100vh - 287px) !important',
            [theme.breakpoints.up('lg')]: {
              height: 'calc(100vh - 282px) !important',
            },
            [theme.breakpoints.up('xl')]: {
              height: 'calc(100vh - 360px) !important',
            },
          },
          '& .scroll-app-sidebar': {
            height: 'calc(100vh - 306px) !important',
            [theme.breakpoints.up('lg')]: {
              height: 'calc(100vh - 302px) !important',
            },
            [theme.breakpoints.up('xl')]: {
              height: 'calc(100vh - 392px) !important',
            },
          },
          '& .scrum-relative, & .scrum-col': {
            [theme.breakpoints.up('lg')]: {
              height: 'calc(100vh - 218px) !important',
            },
            [theme.breakpoints.up('xl')]: {
              height: 'calc(100vh - 280px) !important',
            },
          },
        },
        '& $mainContainerFull': {
          '& .scroll-app': {
            height: 'calc(100vh - 340px) !important',
            [theme.breakpoints.up('sm')]: {
              height: 'calc(100vh - 286px) !important',
            },
            [theme.breakpoints.up('md')]: {
              height: 'calc(100vh - 296px) !important',
            },
          },
          '& .scroll-app-detail': {
            height: 'calc(100vh - 286px) !important',
            [theme.breakpoints.up('md')]: {
              height: 'calc(100vh - 305px) !important',
            },
          },
          '& .scrum-relative, & .scrum-col': {
            height: 'calc(100vh - 204px) !important',
            [theme.breakpoints.up('md')]: {
              height: 'calc(100vh - 214px) !important',
            },
          },
        },
      },
    },
    mainContent: {
      flex: 1,
      display: 'flex',
    },
    mainContainer: {
      width: `calc(100vw - ${themeStyle === 'Modern' ? '19rem' : '19rem'})`,
      paddingBottom: footer ? 0 : 10,
      [theme.breakpoints.up('xl')]: {
        width: `calc(100vw - ${
          themeStyle === 'Modern' ? '22.8rem' : '21.6rem'
        })`,
      },
      '& > .scrollbar-container': {
        padding: '20px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          padding: '30px 32px 0',
        },
      },
      '& .scroll-app': {
        height: 'calc(100vh - 239px) !important',
        [theme.breakpoints.up('lg')]: {
          height: 'calc(100vh - 234px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 302px) !important',
        },
      },
      '& .scroll-app-detail': {
        height: 'calc(100vh - 239px) !important',
        [theme.breakpoints.up('lg')]: {
          height: 'calc(100vh - 234px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 302px) !important',
        },
      },
      '& .scroll-app-sidebar': {
        height: 'calc(100vh - 258px) !important',
        [theme.breakpoints.up('lg')]: {
          height: 'calc(100vh - 254px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 334px) !important',
        },
      },
      '& .scrum-relative': {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'calc(100vh - 148px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 168px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 234px) !important',
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
        height: 'calc(100vh - 148px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 168px) !important',
          width: '354px',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 234px) !important',
        },
      },
      '& .scroll-scrum-item': {
        height: 'auto !important',
      },
    },
    mainContainerFull: {
      width: '100vw',
      paddingBottom: footer ? 0 : 10,
      '& > .scrollbar-container': {
        padding: '20px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          padding: '30px 32px 0',
        },
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
      '& .scrum-relative': {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'calc(100vh - 148px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 168px) !important',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 234px) !important',
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
        height: 'calc(100vh - 148px) !important',
        [theme.breakpoints.up('md')]: {
          height: 'calc(100vh - 168px) !important',
          width: '354px',
        },
        [theme.breakpoints.up('xl')]: {
          height: 'calc(100vh - 234px) !important',
        },
      },
      '& .scroll-scrum-item': {
        height: 'auto !important',
      },
    },
  };
});
export default useStyles;
