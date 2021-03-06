import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import {Fonts} from '../../../shared/constants/AppEnums';

const ComponentHeader = ({title, bottomPadding, description, refUrl}) => {
  const useStyles = makeStyles((theme) => ({
    containerHeader: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      paddingBottom: 16,
      [theme.breakpoints.up('xl')]: {
        paddingTop: 16,
      },
    },
    linkIcon: {
      paddingLeft: 4,
    },
    textbase: {
      fontSize: 16,
    },
  }));

  const classes = useStyles();
  return (
    <Box className={classes.containerHeader}>
      <Box mb={3} pr={{sm: 3}} flex={{sm: 1}}>
        <Box
          component='h3'
          color='text.primary'
          fontFamily={Fonts.BOLD}
          fontSize={{xs: 18, sm: 20, xl: 24}}
          gutterBottom>
          {title}
        </Box>
        {description ? (
          <Typography
            variant='h6'
            className={classes.textbase}
            color='text.secondary'>
            {description}
          </Typography>
        ) : null}
      </Box>
      {refUrl ? (
        <Box height={40}>
          <Button
            variant='outlined'
            color='primary'
            href={refUrl}
            target='_blank'>
            Reference <LinkIcon className={classes.linkIcon} />
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default ComponentHeader;

ComponentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  refUrl: PropTypes.string,
};
ComponentHeader.defaultProps = {};
