import React from 'react';
import { withRouter } from 'react-router-dom';
import {stringify} from "query-string";
import Pagination from '@material-ui/lab/Pagination';

import { range, getPaginator } from "../../utils/utils";

import useStyles from "../../pages/authentication/authentication.style";

const PaginationComponent = props => {
  const {total, limit, url, history, location } = props;
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit, offset
  });
  const classes = useStyles();
  const pagesCount = Math.ceil(total/limit);
  const pages = range(1, 50);
  console.log('Cure ev', history);


  const handleChange = (ev, value) => {
    if (history)
      history.push(`${url}?page=${value}`)
  };

  return(
    <div className={classes.root}>
      <Pagination
        count={pagesCount} variant="outlined" defaultPage={currentPage} shape="rounded"
        onChange={handleChange}
      />
    </div>
  )
};

export default withRouter(PaginationComponent);

