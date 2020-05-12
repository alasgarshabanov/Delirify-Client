import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import {Box, makeStyles} from '@material-ui/core';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import {grey} from '@material-ui/core/colors/index';

const DealsTable = props => {
  const {dealsTableData} = props;

  const useStyles = makeStyles(theme => ({
    borderBottomClass: {
      borderBottom: '0 none',
    },
    tableResponsiveMaterial: {
      minHeight: '.01%',
      overflowX: 'auto',

      '@media (max-width: 767px)': {
        width: '100%',
        marginBottom: 15,
        overflowY: 'hidden',
        border: `1px solid ${grey[300]}`,
        '& > table': {
          marginBottom: 0,
          '& > thead > tr > th, > tbody > tr > th, > tfoot > tr > th, thead > tr > td, tbody > tr > td, tfoot > tr > td': {
            whiteSpace: 'nowrap',
          },
        },
      },
    },
  }));
  const classes = useStyles(props);

  return (
    <Box className={classes.tableResponsiveMaterial}>
      <Table className='table'>
        <TableHead className={classes.borderBottomClass}>
          <TableHeading />
        </TableHead>
        <TableBody className={classes.borderBottomClass}>
          {dealsTableData.map(row => (
            <TableItem row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DealsTable;

DealsTable.defaultProps = {
  dealsTableData: [],
};

DealsTable.propTypes = {
  dealsTableData: PropTypes.array,
};
