import React from 'react';
import {NavLink} from '../../index';
import Box from '@material-ui/core/Box';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from '@material-ui/styles';
import {Fonts} from '../../../shared/constants/AppEnums';
import Icon from '@material-ui/core/Icon';

const WrappedIcon = props => <Icon {...props} />;
WrappedIcon.muiName = 'Icon';

const AppsSideBarFolderItem = ({item, path}) => {
  const useStyle = makeStyles(theme => ({
    listItem: {
      paddingLeft: '10px',
      paddingRight: '0',
      paddingTop: '5px',
      paddingBottom: '5px',

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
    listItemIcon: {
      minWidth: 10,
      paddingTop: 4,
    },
    listItemText: {
      fontFamily: 'inherit',
    },
  }));

  const classes = useStyle();
  return (
    <ListItem
      button
      key={item.id}
      to={path}
      component={NavLink}
      className={classes.listItem}
      activeClassName='active'>
      <Box component='span' mr={{xs: 4, xl: 7}}>
        <ListItemIcon className={classes.listItemIcon}>
          <WrappedIcon>{item.icon}</WrappedIcon>
        </ListItemIcon>
      </Box>
      <ListItemText primary={item.name} className={classes.listItemText} />
    </ListItem>
  );
};

export default AppsSideBarFolderItem;
