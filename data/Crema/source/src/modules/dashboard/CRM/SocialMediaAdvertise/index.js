import React from 'react';
import Card from '@material-ui/core/Card';
import SocialMediaGraph from './SocialMediaGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core';
import {Fonts} from '../../../../shared/constants/AppEnums';

const SocialMediaAdvertise = (props) => {
  const {socialMediaData} = props;

  const useStyles = makeStyles((theme) => ({
    textRoot: {
      textTransform: 'capitalize',
    },
    graphText: {
      fontFamily: Fonts.MEDIUM,
      fontSize: 16,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
    textTruncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  }));

  const classes = useStyles(props);
  return (
    <Box
      py={{xs: 5, sm: 5, xl: 5}}
      px={{xs: 6, sm: 6, xl: 6}}
      height='100%'
      display='flex'
      clone>
      <Card>
        <Box width={1}>
          <Box
            component='h3'
            className={classes.textTruncate}
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 18, sm: 20, xl: 24}}>
            <IntlMessages id='dashboard.socialMedia' />
          </Box>
          <SocialMediaGraph
            socialMediaData={socialMediaData}
            classes={classes}
          />
          <Box
            mb={1}
            mx={{xs: -2, xl: -3}}
            display='flex'
            justifyContent='space-between'>
            {socialMediaData.map((item) => {
              return (
                <Box px={{xs: 2, xl: 3}} key={item.id}>
                  <Box display='flex' alignItems='center'>
                    <Box
                      component='span'
                      height={{xs: 12, xl: 16}}
                      width={{xs: 12, xl: 16}}
                      borderRadius='50%'
                      display='block'
                      p={1}
                      mr={2}
                      bgcolor={item.color}
                    />
                    <Box
                      component='h4'
                      mb={1}
                      fontFamily={Fonts.BOLD}
                      fontSize={{xs: 18, xl: 24}}>{`$${item.revenue}`}</Box>
                  </Box>
                  <Box
                    component='p'
                    color='grey.500'
                    fontSize={{xs: 16, xl: 18}}
                    className={classes.textRoot}>
                    {item.name}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SocialMediaAdvertise;

SocialMediaAdvertise.defaultProps = {
  socialMediaData: [],
};

SocialMediaAdvertise.propTypes = {
  socialMediaData: PropTypes.array,
};
