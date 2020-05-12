import React from 'react';
import {NavLink} from '../../../../../@crema';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const LabelItem = ({label, classes}) => {
  return (
    <ListItem
      key={label.id}
      button
      to={`/apps/mail/label/${label.alias}`}
      component={NavLink}
      activeClassName='active'>
      <Box
        component='span'
        height={12}
        width={12}
        mr={{xs: 4, xl: 7}}
        borderRadius='50%'
        bgcolor={`${label.color}`}
      />
      <Box my={{xl: 1}} clone>
        <ListItemText primary={label.name} />
      </Box>
    </ListItem>
  );
};

export default LabelItem;

LabelItem.prototype = {
  label: PropTypes.object.isRequired,
};
