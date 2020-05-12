import React from 'react';
import {NavLink} from '../../../../../@crema';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const LabelItem = ({label}) => {
  return (
    <ListItem
      button
      key={label.id}
      to={`/apps/todo/label/${label.alias}`}
      component={NavLink}
      activeClassName='active'>
      <Box
        component='span'
        width={12}
        height={12}
        mr={{xs: 4, xl: 7}}
        borderRadius='50%'
        bgcolor={`${label.color}`}
      />

      <ListItemText primary={label.name} />
    </ListItem>
  );
};

export default LabelItem;

LabelItem.prototype = {
  label: PropTypes.object.isRequired,
};
