import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import GridContainer from '@crema/core/GridContainer';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import {Fonts} from '../../../shared/constants/AppEnums';

const ComponentHeader = ({title, bottomPadding, description, refUrl}) => {
  const useStyles = makeStyles(theme => ({
    gridContainer: {
      paddingBottom: 16,
      [theme.breakpoints.up('xl')]: {
        paddingTop: 16,
      },
    },
    grid: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    <GridContainer className={classes.gridContainer}>
      <Grid item xs={12} className={classes.grid}>
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
      </Grid>
    </GridContainer>
  );
};

export default ComponentHeader;

ComponentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  refUrl: PropTypes.string,
};
ComponentHeader.defaultProps = {};
