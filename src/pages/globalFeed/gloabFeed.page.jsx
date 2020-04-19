import React, {useEffect, useState} from "react";
import { Grid, Paper } from "@material-ui/core";

import useFetch from '../../hooks/useFetch.hook';
import FeedComponent from "../../components/feed/feed.component";

import useStyles from './globalFeed.style';
import PaginationComponent from "../../components/pagination/pagination.component";

const GlobalFeedPage = () => {
  const classes = useStyles();

  const apiUrl = '/articles?limit=10&offset=0';
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
  console.log('-- >> ', response);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return(
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          { isLoading && <div>Loading ....</div> }
          { error && <p>Some Error Happened</p>}
          {
            !isLoading && response && (
              <>
                <FeedComponent articles={response.articles} />
                <PaginationComponent total={500} limit={10} url='/' currentPage={2} />
              </>
            )
          }
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          Popular Tags
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GlobalFeedPage;
