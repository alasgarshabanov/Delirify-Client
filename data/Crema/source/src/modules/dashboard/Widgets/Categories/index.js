import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {Card, makeStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import {Fonts} from '../../../../shared/constants/AppEnums';
import {isBreakPointDown} from '../../../../@crema/utility/Utils';

const getData = data => {
  if (isBreakPointDown('xl')) {
    return data.slice(0, 10);
  } else {
    return data;
  }
};

const Categories = props => {
  const useStyles = makeStyles(theme => ({
    listHalf: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginLeft: '-10px',
      marginRight: '-10px',
      paddingTop: 0,

      '& li': {
        width: '50%',
        padding: '0px 10px',
        '& .MuiListItemIcon-root': {
          minWidth: 0,
        },
      },
    },
    pointer: {
      cursor: 'pointer',
    },
  }));

  const classes = useStyles(props);

  const data = getData(props.data);

  const [categoryList, handleList] = useState(data);

  const handleChange = (e, category) => {
    category.isChecked = e.target.checked;
    const list = categoryList.map(item =>
      item.id === category.id ? category : item,
    );
    handleList(list);
  };

  return (
    <Box
      py={{xs: 4, sm: 4, xl: 6}}
      px={{xs: 6, sm: 8, xl: 10}}
      height='1'
      clone>
      <Card>
        <Box mb={4} display='flex' alignItems='center'>
          <Box
            component='h3'
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, sm: 20, xl: 24}}>
            <IntlMessages id='dashboard.categories' />
          </Box>
          <Box component='span' ml='auto' mt={1.5}>
            <CloseIcon className={classes.pointer} />
          </Box>
        </Box>
        <List className={classes.listHalf}>
          {categoryList.map(item => {
            return (
              <CategoryItem
                key={item.id}
                item={item}
                classes={classes}
                handleChange={handleChange}
              />
            );
          })}
        </List>
      </Card>
    </Box>
  );
};

export default Categories;

Categories.defaultProps = {
  categoryList: [],
};

Categories.propTypes = {
  categoryList: PropTypes.array,
};
