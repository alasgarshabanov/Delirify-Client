import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import clsx from 'clsx';

const TableHeading = props => {
  const useStyles = makeStyles(theme => ({
    tableRowRoot: {
      borderBottom: '0 none',
      color: grey[500],
    },
    tableCellRoot: {
      borderBottom: '0 none',
      fontSize: 14,
      padding: 8,
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
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
        padding: 16,
      },
    },
    whitespaceNowrap: {
      whiteSpace: 'nowrap',
    },
  }));

  const classes = useStyles(props);
  return (
    <TableRow className={classes.tableRowRoot}>
      <TableCell className={classes.tableCellRoot}>
        <IntlMessages id='common.num' />
      </TableCell>
      <TableCell
        align='left'
        className={clsx(classes.tableCellRoot, classes.whitespaceNowrap)}>
        <IntlMessages id='dashboard.ticketId' />
      </TableCell>
      <TableCell
        align='left'
        className={clsx(classes.tableCellRoot, classes.whitespaceNowrap)}>
        <IntlMessages id='dashboard.basicInfo' />
      </TableCell>
      <TableCell
        align='left'
        className={clsx(classes.tableCellRoot, classes.whitespaceNowrap)}>
        <IntlMessages id='dashboard.createDate' />
      </TableCell>
      <TableCell align='left' className={classes.tableCellRoot}>
        <IntlMessages id='common.contact' />
      </TableCell>
    </TableRow>
  );
};

export default TableHeading;
