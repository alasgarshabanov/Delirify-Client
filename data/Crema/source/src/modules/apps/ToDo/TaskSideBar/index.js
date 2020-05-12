import React from 'react';
import Card from '@material-ui/core/Card';
import {useDispatch, useSelector} from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import SideBarContent from './SideBarContent';
import {onToggleTodoDrawer} from '../../../../redux/actions';
import PropTypes from 'prop-types';
import useStyles from './index.style';

const TaskSideBar = props => {
  const dispatch = useDispatch();

  const todoDrawer = useSelector(({todoApp}) => todoApp.todoDrawer);

  const classes = useStyles();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          open={todoDrawer}
          onClose={ev => dispatch(onToggleTodoDrawer())}
          classes={{
            root: clsx(classes.appSidebar, props.variant),
            paper: clsx(
              classes.appSidebarDrawer,
              props.variant,
              props.position === 'left'
                ? classes.leftSidebar
                : classes.rightSidebar,
            ),
          }}
          // container={props.rootRef.current}
          BackdropProps={{
            classes: {
              root: classes.backdrop,
            },
          }}
          style={{position: 'absolute'}}>
          <SideBarContent classes={classes} />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Card>
          <SideBarContent classes={classes} />
        </Card>
      </Hidden>
    </>
  );
};

export default TaskSideBar;

TaskSideBar.defaultProps = {
  variant: '',
  position: '',
};

TaskSideBar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
};
