import React from 'react';
import { withRouter } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const SidebarMenu = props => {
  const { history } = props;
  const {
    pass: {
      classes, theme,
      sidebarOpen, handleSidebarClose
    }
  } = props;

  const handleLinkClick = (url) => {
    return history.push(url);
  };

  return(
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={sidebarOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleSidebarClose}>
          {
            theme.direction !== 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />
          }
        </IconButton>
      </div>
      <Divider />
      <List>
        {[
          {title: 'Inbox', icon: <InboxIcon />, url: '/login'},
          {title: 'Mail', icon: <MailIcon />, url: '/mail'},
        ].map((menu, index) => (
          <ListItem button key={menu.title} onClick={() => handleLinkClick(menu.url)}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
};


export default withRouter(SidebarMenu);
