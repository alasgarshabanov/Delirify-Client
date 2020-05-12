import React from 'react';
import {Card} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Fonts} from '../../../../shared/constants/AppEnums';

const CremaCard = (props) => {
  const {data, bgColor, icon} = props;

  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: `${bgColor}`,
    },
    userInfo: {
      width: 'calc(100% - 50px)',
    },
    userInfoView: {
      width: 'calc(100% - 50px)',
    },
    pointer: {
      cursor: 'pointer',
    },
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    letterSpacing: {
      letterSpacing: '0.1em',
    },
  }));

  const classes = useStyles(props);

  return (
    <Box py={{xs: 5, sm: 5, xl: 5}} px={{xs: 6, sm: 6, xl: 6}} height='1' clone>
      <Card className={classes.root}>
        <Box mb={{xs: 4, xl: 6}} mt={1} display='flex' alignItems='center'>
          <Box
            mr={2}
            display='flex'
            alignItems='center'
            className={classes.userInfo}>
            <Box width={40}>
              <img alt='logo' src={data.image} />
            </Box>
            <Box
              ml={4}
              fontSize={{xs: 16, xl: 20}}
              className={classes.userInfoView}>
              <Box
                component='h4'
                color='primary.contrastText'
                fontFamily={Fonts.BOLD}
                fontSize={{xs: 16, xl: 18}}
                className={clsx(
                  classes.textUppercase,
                  classes.truncate,
                  classes.letterSpacing,
                )}>
                {data.name}
              </Box>
              <Box
                component='span'
                color='primary.contrastText'
                mb={0}
                display='block'
                className={clsx(classes.pointer, classes.truncate)}>
                {data.id}
              </Box>
            </Box>
          </Box>
          <Box component='span' ml='auto'>
            {icon}
          </Box>
        </Box>

        <Box
          component='p'
          color='primary.contrastText'
          mb={{xs: 1, xl: 4}}
          fontSize={{xs: 16, xl: 20}}>
          {data.desc}
        </Box>
      </Card>
    </Box>
  );
};

export default CremaCard;

CremaCard.defaultProps = {
  bgColor: '',
};

CremaCard.propTypes = {
  data: PropTypes.object.isRequired,
  bgColor: PropTypes.string,
};
