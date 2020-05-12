import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import SideBarContent from './SideBarContent';
import {onToggleContactDrawer} from '../../../../redux/actions/ContactApp';
import AppSidebar from '../../../../@crema/core/AppLayout/Standard/AppSidebar';
import useStyles from './index.style';

const ContactSideBar = props => {
  const dispatch = useDispatch();

  const contactDrawer = useSelector(({contactApp}) => contactApp.contactDrawer);

  const classes = useStyles();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          open={contactDrawer}
          onClose={ev => dispatch(onToggleContactDrawer())}
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

export default ContactSideBar;

AppSidebar.defaultProps = {
  variant: '',
  position: 'left',
};

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
};
