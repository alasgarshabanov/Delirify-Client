import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import PropTypes from 'prop-types';

const AppsPagination = ({count, page, onPageChange, className}) => {
  return (
    <TablePagination
      component='div'
      count={count}
      rowsPerPage={15}
      className={className}
      page={page}
      backIconButtonProps={{'aria-label': 'Previous Page'}}
      nextIconButtonProps={{'aria-label': 'Next Page'}}
      onChangePage={onPageChange}
      rowsPerPageOptions={[]}
    />
  );
};

export default AppsPagination;

AppsPagination.defaultProps = {
  className: '',
};

AppsPagination.prototype = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  className: PropTypes.string,
};
