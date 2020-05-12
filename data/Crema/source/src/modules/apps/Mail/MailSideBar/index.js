import React from 'react';
import Card from '@material-ui/core/Card';
import {useDispatch, useSelector} from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import SideBarContent from './SideBarContent';
import {onToggleMailDrawer} from '../../../../redux/actions';
import PropTypes from 'prop-types';
import useStyles from './index.style';

const MailSideBar = props => {
  const dispatch = useDispatch();

  const mailDrawer = useSelector(({mailApp}) => mailApp.mailDrawer);

  const classes = useStyles();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          open={mailDrawer}
          onClose={ev => dispatch(onToggleMailDrawer())}
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
          <SideBarContent />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Card>
          <SideBarContent />
        </Card>
      </Hidden>
    </>
  );
};

export default MailSideBar;

MailSideBar.defaultProps = {
  variant: '',
  position: '',
};

MailSideBar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
};
