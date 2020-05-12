import React from 'react';
import {Card, makeStyles} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../shared/constants/AppEnums';

const Sections = ({data}) => {
  const useStyles = makeStyles(theme => {
    return {
      sectionCard: {
        padding: 20,
        textAlign: 'center',
      },
      avatarClass: {
        height: 60,
        width: 60,
        backgroundColor: data.avatarColor,
        display: 'inline-flex',
        [theme.breakpoints.up('md')]: {
          height: 60,
          width: 60,
          fontSize: 48,
        },
        [theme.breakpoints.up('xl')]: {
          height: 80,
          width: 80,
        },
      },
      readButton: {
        fontFamily: Fonts.BOLD,
        fontSize: 14,
        backgroundColor: 'white',
        color: 'black',
      },
    };
  });

  const classes = useStyles();

  return (
    <Card className={classes.sectionCard}>
      <Box mb={4}>
        <Avatar className={classes.avatarClass}>{data.icon}</Avatar>
      </Box>

      <Box
        component='h2'
        mb={4}
        fontSize={{xs: 18, sm: 20, xl: 24}}
        fontFamily={Fonts.BOLD}>
        {data.title}
      </Box>

      <Box component='p' mb={5}>
        {data.content}
      </Box>

      <Button variant='contained' className={classes.readButton}>
        <IntlMessages id='dashboard.readMore' />
      </Button>
    </Card>
  );
};

export default Sections;

Sections.propTypes = {
  data: PropTypes.object.isRequired,
};
