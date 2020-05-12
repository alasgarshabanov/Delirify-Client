import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../shared/constants/AppEnums';

const FaqList = ({faqList}) => {
  const useStyles = makeStyles(theme => ({
    expansionPanel: {
      borderRadius: theme.overrides.MuiCard.root.borderRadius,
      color: theme.palette.text.secondary,
      marginBottom: '2px',
      padding: '10px 20px',

      '&:before': {
        display: 'none',
      },

      '&:first-child, &:last-child': {
        borderRadius: theme.overrides.MuiCard.root.borderRadius,
      },
    },
    expansionPanelSummary: {
      fontFamily: Fonts.BOLD,
      fontSize: 18,
      padding: 0,
    },
    expansionPanelDetailsRoot: {
      padding: '0 0 10px',
    },
  }));

  const classes = useStyles();
  return (
    <Box height='100%'>
      {faqList.map(item => {
        return (
          <ExpansionPanel className={classes.expansionPanel} key={item.id}>
            <ExpansionPanelSummary
              className={classes.expansionPanelSummary}
              expandIcon={<ExpandMoreIcon />}>
              <Box>{item.ques}</Box>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              className={classes.expansionPanelDetailsRoot}>
              <Box>{item.ans}</Box>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </Box>
  );
};

export default FaqList;

FaqList.propTypes = {
  faqList: PropTypes.array.isRequired,
};
