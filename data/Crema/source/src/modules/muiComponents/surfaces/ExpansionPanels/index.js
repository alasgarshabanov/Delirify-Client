import React from 'react';
import Grid from '@material-ui/core/Grid';

import ComponentCard from '@crema/core/ComponentCard';
import ComponentHeader from '@crema/core/ComponentHeader';
import GridContainer from '@crema/core/GridContainer';
import AccessibilityEP from './AccessibilityEP';
// eslint-disable-next-line import/no-webpack-loader-syntax
import AccessibilityEPSource from '!raw-loader!./AccessibilityEP';
import ControlledAccordion from './ControlledAccordion';
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledAccordionSource from '!raw-loader!./ControlledAccordion';
import CustomizedExpansionPanels from './CustomizedExpansionPanels';
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedExpansionPanelsSource from '!raw-loader!./CustomizedExpansionPanels';

const Cards = () => {
  return (
    <>
      <ComponentHeader
        title='Expansion Panels'
        description='Expansion panels contain creation flows and allow lightweight editing of an element.'
        refUrl='https://material-ui.com/components/expansion-panels/'
      />

      <GridContainer>
        <Grid item xs={12}>
          <ComponentCard
            title='Accessibility'
            component={AccessibilityEP}
            source={AccessibilityEPSource}
            description='For optimal accessibility we recommend setting id and aria-controls on the ExpansionPanelSummary. The ExpansionPanel will derive the necessary aria-labelledby and id for the content region of the panel.'
          />
        </Grid>
        <Grid item xs={12}>
          <ComponentCard
            title='Controlled Accordion'
            component={ControlledAccordion}
            source={ControlledAccordionSource}
            description='Extend the default panel behavior to create an accordion with the ExpansionPanel component.'
          />
        </Grid>
        <Grid item xs={12}>
          <ComponentCard
            title='Customized expansion panels'
            component={CustomizedExpansionPanels}
            source={CustomizedExpansionPanelsSource}
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12}>
          <ComponentCard
            title='Secondary heading and Columns'
            component={CustomizedExpansionPanels}
            source={CustomizedExpansionPanelsSource}
            description='Multiple columns can be used to structure the content, and a helper text may be added to the panel to assist the user.'
          />
        </Grid>
      </GridContainer>
    </>
  );
};

export default Cards;
