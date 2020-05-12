import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import {Box, makeStyles} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {red} from '@material-ui/core/colors';
import {Fonts} from '../../../../../shared/constants/AppEnums';

const TableItem = props => {
  const {row} = props;

  const useStyles = makeStyles(theme => ({
    borderBottomClass: {
      borderBottom: '0 none',
    },
    tableCell: {
      borderBottom: '0 none',
      fontSize: 14,
      padding: '6px 8px',
      '&:first-child': {
        [theme.breakpoints.up('xl')]: {
          paddingLeft: 4,
        },
      },
      '&:last-child': {
        [theme.breakpoints.up('xl')]: {
          paddingRight: 4,
        },
      },
      whiteSpace: {
        whiteSpace: 'no-wrap',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
    },
    avatar: {
      width: 40,
      height: 40,
      backgroundColor: red[500],
      [theme.breakpoints.up('xl')]: {
        width: 50,
        height: 50,
      },
    },
  }));
  const classes = useStyles(props);

  return (
    <TableRow className={classes.borderBottomClass}>
      <TableCell component='th' scope='row' className={classes.tableCell}>
        {row.id}.
      </TableCell>
      <TableCell
        align='left'
        className={clsx(classes.tableCell, classes.whiteSpace)}>
        {row.ticketId}
      </TableCell>
      <TableCell
        align='left'
        className={clsx(classes.tableCell, classes.whiteSpace)}>
        <Box display='flex' alignItems='center'>
          {row.image ? (
            <Avatar className={classes.avatar} src={row.image} />
          ) : (
            <Avatar className={classes.avatar}>
              {row.name[0].toUpperCase()}
            </Avatar>
          )}
          <Box component='span' ml={{xs: 3, xl: 5}} fontFamily={Fonts.MEDIUM}>
            {row.name}
          </Box>
        </Box>
      </TableCell>
      <TableCell
        align='left'
        className={clsx(classes.tableCell, classes.whiteSpace)}>
        {row.created}
      </TableCell>
      <TableCell
        align='left'
        className={clsx(classes.tableCell, classes.whiteSpace)}>
        {row.contact}
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  row: PropTypes.object.isRequired,
};
