import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import {useDispatch} from 'react-redux';
import {
  onGetToDoFolderList,
  onGetToDoLabelList,
  onGetToDoPriorityList,
  onGetToDoStaffList,
  onGetToDoStatusList,
  onToggleTodoDrawer,
} from '../../../redux/actions';
import InfoView from '@crema/core/InfoView';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import {Fonts} from '../../../shared/constants/AppEnums';

const ToDo = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetToDoLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoPriorityList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStaffList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStatusList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (props.match.params.id) {
      return (
        <Card className={classes.cardRoot}>
          <TaskDetail />
        </Card>
      );
    } else {
      return (
        <Card className={classes.cardRoot}>
          <TasksList />
        </Card>
      );
    }
  };

  const useStyles = makeStyles(theme => ({
    appsContainer: {
      display: 'flex',
    },
    appsSidebar: {
      [theme.breakpoints.up('lg')]: {
        width: '17rem',
      },
      [theme.breakpoints.up('xl')]: {
        width: '20rem',
      },
    },
    appsMainContent: {
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: 'calc(100% - 17rem)',
        paddingLeft: 40,
      },
      [theme.breakpoints.up('xl')]: {
        width: 'calc(100% - 20rem)',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
      width: 35,
      height: 35,
    },
    cardRoot: {
      flex: 1,
    },
  }));

  const classes = useStyles();

  return (
    <Box pt={{xl: 4}} flex={1} display='flex' flexDirection='column'>
      <Box
        mb={{xs: 2, lg: 4, xl: 6}}
        mt={{xs: -3, lg: 0}}
        display='flex'
        alignItems='center'>
        <Hidden lgUp>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={() => dispatch(onToggleTodoDrawer())}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Hidden>
        <Box
          component='h3'
          color='text.primary'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='todo.todoApp' />
        </Box>
      </Box>

      <Box className={classes.appsContainer}>
        <Box className={classes.appsSidebar}>
          <TaskSideBar />
        </Box>

        <Box className={classes.appsMainContent}>
          {onGetMainComponent()}
          <InfoView />
        </Box>
      </Box>
    </Box>
  );
};

export default ToDo;

ToDo.defaultProps = {
  match: null,
};

ToDo.prototype = {
  match: PropTypes.node,
};
