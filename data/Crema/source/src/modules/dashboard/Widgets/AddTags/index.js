import React, {useState} from 'react';
import {Card} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import AddNewTag from './AddNewTag';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {blue, green, orange, red, teal} from '@material-ui/core/colors';
import {Fonts} from '../../../../shared/constants/AppEnums';
import clsx from 'clsx';

const colorList = [
  {id: 9001, color: blue[600]},
  {id: 9002, color: red[600]},
  {id: 9003, color: green[600]},
  {id: 9004, color: orange[600]},
  {id: 9005, color: teal[600]},
  {id: 9006, color: blue[600]},
];

const AddTags = (props) => {
  const {data} = props;

  const [tags, setTags] = useState(data);

  const handleDelete = (tagToDelete) => () => {
    setTags((tags) => tags.filter((tag) => tag.id !== tagToDelete.id));
  };

  const onAddNewTag = (newTag) => {
    let tag = {
      label: newTag,
      key: Math.floor(Math.random() * 10000),
      color: colorList[Math.floor(Math.random() * colorList.length)].color,
    };
    setTags((tags) => tags.concat(tag));
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      fontSize: 14,
      margin: 8,
      padding: '8px 4px',
      backgroundColor: `${tags.color}`,
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.up('xl')]: {
        fontSize: 16,
      },
    },
    roundedXl: {
      borderRadius: 4,
    },
    greyColorRoot: {
      backgroundColor: theme.palette.grey[200],
    },
  }));

  const classes = useStyles(props);

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card>
        <Box
          component='h3'
          mb={4}
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='dashboard.addTags' />
        </Box>

        <Box p={2} className={clsx(classes.roundedXl, classes.greyColorRoot)}>
          {tags.map((item) => {
            return (
              <Chip
                key={item.id}
                style={{backgroundColor: item.color}}
                label={item.label}
                className={classes.root}
                onDelete={handleDelete(item)}
              />
            );
          })}

          <AddNewTag onAddNewTag={onAddNewTag} />
        </Box>
      </Card>
    </Box>
  );
};

export default AddTags;

AddTags.defaultProps = {
  data: [],
};

AddTags.propTypes = {
  data: PropTypes.array,
};
