import React from 'react';
import {makeStyles} from '@material-ui/core';
import Slider from 'react-slick';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {Fonts} from '../../shared/constants/AppEnums';

import {authSlider} from '../../@crema/services/db/auth';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const RightSlider = props => {
  const useStyles = makeStyles(theme => ({
    sliderRoot: {
      maxWidth: 400,
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        maxWidth: 450,
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: 650,
      },
      '& .slick-dots li': {
        '& button:before': {
          color: theme.palette.background.paper,
        },
        '&.slick-active button:before': {
          opacity: 1,
        },
      },
    },
  }));

  const classes = useStyles(props);

  return (
    <Box className={classes.sliderRoot}>
      <Slider {...settings}>
        {authSlider.map(slider => {
          return (
            <Box textAlign='center' key={slider.id}>
              <Box px={4} mb={{xs: 3, md: 5}}>
                <img src={slider.image} alt='about us' title='aboutUs' />
              </Box>
              <Box px={5}>
                <Box component='h6' mb={1} fontFamily={Fonts.BOLD}>
                  {slider.title}
                </Box>
                <Typography>{slider.description}</Typography>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default RightSlider;
