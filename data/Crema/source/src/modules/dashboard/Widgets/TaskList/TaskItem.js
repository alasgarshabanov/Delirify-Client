import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../../shared/constants/AppEnums';

const TaskItem = props => {
  const {item} = props;
  const useStyles = makeStyles(theme => ({
    paddingX: {
      padding: '0px 0px 4px',
      '&:last-child': {
        paddingBottom: 0,
      },
    },
    marginY: {
      marginTop: 0,
      marginBottom: 0,
    },
  }));

  const classes = useStyles(props);
  return (
    <ListItem key={item.id} className={classes.paddingX}>
      <ListItemText
        className={classes.marginY}
        primary={
          <Box
            component='span'
            display='block'
            color='primary.main'
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, xl: 24}}>
            {item.title}
          </Box>
        }
        secondary={
          <Box
            component='span'
            display='block'
            color='grey.500'
            fontSize={{xs: 16, xl: 18}}>
            {item.desc}
          </Box>
        }
      />
    </ListItem>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  item: PropTypes.object.isRequired,
};
