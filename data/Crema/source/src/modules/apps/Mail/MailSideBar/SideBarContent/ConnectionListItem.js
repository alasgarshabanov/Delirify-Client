import React, {useState} from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ConnectionListHoverPopUp from './ConnectionListHoverPopUp';
import ChatWindow from './ChatWindow';
import {Box, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../../shared/constants/AppEnums';

const ConnectionListItem = props => {
  const {connection} = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const [isOpenChat, setOpenChat] = useState(false);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const useStyles = makeStyles(theme => ({
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
      cursor: 'pointer',
      [theme.breakpoints.up('xl')]: {
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    avatar: {
      width: 50,
      height: 50,
    },
    marginTop0: {
      marginTop: 0,
    },
    marginY: {
      marginTop: 0,
      marginBottom: 0,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <ListItem
        aria-owns={open ? 'mouse-over-popover' : undefined}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={() => setOpenChat(true)}
        key={connection.id}
        className={classes.listItem}
        alignItems='flex-start'>
        <Box mr={{xs: 2, xl: 3}} component='span'>
          <ListItemAvatar className={classes.marginTop0}>
            <Avatar
              className={classes.avatar}
              alt='Remy Sharp'
              src={connection.image}
            />
          </ListItemAvatar>
        </Box>
        <ListItemText
          className={classes.marginY}
          primary={
            <Box component='span' fontFamily={Fonts.BOLD}>
              {connection.name}
            </Box>
          }
          secondary={
            <Box component='span' display='block' color='text.primary'>
              {connection.status}
            </Box>
          }
        />
        <ConnectionListHoverPopUp
          anchorEl={anchorEl}
          open={open}
          connection={connection}
          handlePopoverClose={handlePopoverClose}
        />
      </ListItem>

      {isOpenChat ? (
        <ChatWindow
          setOpenChat={setOpenChat}
          isOpenChat={isOpenChat}
          connection={connection}
        />
      ) : null}
    </>
  );
};

export default ConnectionListItem;

ConnectionListItem.defaultProps = {
  connection: null,
};

ConnectionListItem.prototype = {
  connection: PropTypes.object,
};
