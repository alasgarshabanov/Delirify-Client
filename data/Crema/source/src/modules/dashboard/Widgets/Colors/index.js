import React, {useState} from 'react';
import {Card} from '@material-ui/core';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import ColorItem from './ColorItem';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';
import {isBreakPointDown} from '../../../../@crema/utility/Utils';

const getData = (data) => {
  if (isBreakPointDown('xl')) {
    return data;
  } else {
    return data.slice(0, 9);
  }
};

const Colors = (props) => {
  const data = getData(props.data);
  const [colorsList, handleList] = useState(data);

  const handleChange = (e, color) => {
    color.isChecked = e.target.checked;
    const list = colorsList.map((item) =>
      item.id === color.id ? color : item,
    );
    handleList(list);
  };

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card>
        <Box
          component='h3'
          mb={4}
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}>
          <IntlMessages id='dashboard.colors' />
        </Box>

        {data.map((item) => {
          return (
            <ColorItem key={item.id} item={item} handleChange={handleChange} />
          );
        })}
      </Card>
    </Box>
  );
};

export default Colors;

Colors.defaultProps = {
  data: [],
};

Colors.propTypes = {
  data: PropTypes.array,
};
