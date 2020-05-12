import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../../shared/constants/AppEnums';

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingLeft: '10px',
    paddingRight: '0',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: 'transparent',

    '& .MuiListItemText-root': {
      [theme.breakpoints.down('lg')]: {
        marginTop: 0,
        marginBottom: 0,
      },
    },

    '& .MuiTypography-body1': {
      fontSize: '16px',
      color: '#A8A8A8',
      [theme.breakpoints.up('xl')]: {
        fontSize: '18px',
      },
    },

    '& svg': {
      fontSize: '18px',
      color: '#A8A8A8',
      [theme.breakpoints.up('xl')]: {
        fontSize: '20px',
      },
    },

    '&:hover,&:focus,&.active': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,

      '& svg': {
        fontSize: '18px',
        color: theme.palette.primary.main,
        [theme.breakpoints.up('xl')]: {
          fontSize: '20px',
        },
      },

      '& .MuiTypography-root': {
        color: theme.palette.primary.main,
      },
    },

    '&.active': {
      color: theme.palette.primary.main,
      fontFamily: Fonts.BOLD,

      '& svg, & .MuiTypography-root': {
        fontFamily: Fonts.BOLD,
        color: theme.palette.primary.main,
      },
    },
  },
  appSidebarDrawer: {
    width: '19rem',
    '$ .listItem': {
      zIndex: 1305,
    },
  },
  btnRoot: {
    width: '100%',
    fontSize: 16,
    height: '3rem',
    fontFamily: Fonts.MEDIUM,
    textTransform: 'capitalize',
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
      height: '3.5rem',
    },
  },
}));
export default useStyles;
