import React from 'react';
import Grid from '@material-ui/core/Grid';

import ComponentCard from '@crema/core/ComponentCard';
import ComponentHeader from '@crema/core/ComponentHeader';
import GridContainer from '@crema/core/GridContainer';

import YouTubeExample from './YouTubeExample';
// eslint-disable-next-line import/no-webpack-loader-syntax
import YouTubeExampleSource from '!raw-loader!./YouTubeExample';
import FacebookExample from './FacebookExample';
// eslint-disable-next-line import/no-webpack-loader-syntax
import FacebookExampleSource from '!raw-loader!./FacebookExample';

const Skeleton = () => {
  return (
    <>
      <ComponentHeader
        title='Skeleton'
        description='Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.'
        refUrl='https://material-ui.com/components/skeleton/'
      />

      <GridContainer>
        <Grid item xs={12}>
          <ComponentCard
            title='YouTube example'
            component={YouTubeExample}
            source={YouTubeExampleSource}
          />
        </Grid>
        <Grid item xs={12}>
          <ComponentCard
            title='Facebook example'
            component={FacebookExample}
            source={FacebookExampleSource}
          />
        </Grid>
      </GridContainer>
    </>
  );
};

export default Skeleton;
