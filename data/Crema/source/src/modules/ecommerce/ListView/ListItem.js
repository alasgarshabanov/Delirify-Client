import React from 'react';
import Card from '@material-ui/core/Card';
import {Checkbox, makeStyles} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Slider from 'react-slick';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {green, grey} from '@material-ui/core/colors';
import {Fonts} from '../../../shared/constants/AppEnums';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ListItem = props => {
  const {item} = props;

  const useStyles = makeStyles(theme => ({
    root: {
      [theme.breakpoints.up('sm')]: {
        width: '8rem',
      },
      [theme.breakpoints.up('xl')]: {
        width: '10rem',
      },
    },
    contentRoot: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'calc(100% - 8rem)',
      },
      [theme.breakpoints.up('xl')]: {
        width: 'calc(100% - 10rem)',
      },
    },
    priceView: {
      fontSize: 12,
      [theme.breakpoints.up('xl')]: {
        fontSize: 14,
      },
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    lineThrough: {
      textDecoration: 'line-through',
    },
    textSm: {
      fontSize: 14,
    },
    textXs: {
      fontSize: 12,
    },
    checkBoxRoot: {
      '& .MuiCheckbox-root': {
        padding: 3,
      },
    },
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 'calc(100% - 40px)',
    },
  }));

  const classes = useStyles(props);
  return (
    <Grid item xs={12} md={6}>
      <Box p={5} height='1' clone>
        <Card>
          <Box display='flex' flexDirection={{xs: 'column', sm: 'row'}}>
            <Box
              pr={{xs: 0, sm: 4}}
              mb={{xs: 3, sm: 0}}
              className={classes.root}>
              <Slider {...settings}>
                {item.image.map(img => {
                  return (
                    <Box mb={2} textAlign='center' key={img.id}>
                      <img src={img.src} alt='watch' />
                    </Box>
                  );
                })}
              </Slider>
            </Box>

            <Box className={classes.contentRoot}>
              <Box display='flex' alignItems='center' mb={3}>
                <Box
                  component='h3'
                  fontFamily={Fonts.BOLD}
                  fontSize={{xs: 18, sm: 20, xl: 20}}
                  className={classes.truncate}>
                  {item.title}
                </Box>

                <Box
                  component='span'
                  className={classes.checkBoxRoot}
                  ml='auto'
                  display='block'
                  textAlign='right'>
                  <Checkbox
                    icon={<FavoriteBorderIcon />}
                    checkedIcon={<FavoriteOutlinedIcon />}
                  />
                </Box>
              </Box>

              <Box
                component='p'
                color='grey.500'
                mb={5}
                className={classes.textSm}>
                {item.description}
              </Box>

              <Box
                mb={{xs: 2, xl: 5}}
                display='flex'
                flexWrap='wrap'
                className={classes.priceView}>
                <Box
                  mr={{xs: 2, xl: 4}}
                  mb={1}
                  pr={{xs: 2, xl: 4}}
                  borderRight={1}
                  borderColor={grey[200]}>
                  <Box
                    component='span'
                    color='grey.600'
                    fontFamily={Fonts.MEDIUM}
                    className={classes.textUppercase}>
                    <IntlMessages id='ecommerce.exclusivePrice' />:
                  </Box>
                  <Box component='span' ml={2} fontFamily={Fonts.MEDIUM}>
                    ${item.price}
                  </Box>
                </Box>
                <Box
                  mr={{xs: 2, xl: 4}}
                  mb={1}
                  pr={{xs: 2, xl: 4}}
                  color='grey.500'
                  borderRight={1}
                  borderColor='primary.main'>
                  <IntlMessages id='ecommerce.mrp' />:
                  <Box component='span' className={classes.lineThrough}>
                    ${item.mrp}
                  </Box>
                </Box>
                <Box mb={1} fontFamily={Fonts.MEDIUM} color={green[600]}>
                  {item.discount}% <IntlMessages id='ecommerce.off' />
                </Box>
              </Box>

              <Box
                pt={{xl: 4}}
                mx={{xs: -2, xl: -3}}
                display='flex'
                flexWrap='wrap'
                justifyContent='space-between'
                alignItems='center'>
                <Box
                  px={{xs: 2, xl: 3}}
                  mb={2}
                  display={{xs: 'none', xl: 'flex'}}
                  alignItems='center'>
                  <Box ml={-3} mr={1}>
                    <Checkbox />
                  </Box>
                  <Box component='span' className={classes.textSm}>
                    <IntlMessages id='ecommerce.addToCompare' />
                  </Box>
                </Box>
                <Box
                  px={{xs: 2, xl: 3}}
                  mb={2}
                  display='flex'
                  alignItems='center'>
                  <Rating size='small' value={item.rating} readOnly />
                  <Box ml={2}>{`(${item.reviews})`}</Box>
                </Box>
                <Box px={{xs: 2, xl: 3}} mb={2}>
                  <Button
                    variant='contained'
                    color='primary'
                    fontFamily={Fonts.MEDIUM}
                    className={classes.textXs}>
                    <IntlMessages id='ecommerce.addToCart' />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
