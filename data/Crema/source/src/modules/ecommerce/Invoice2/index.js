import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Header from './Header';
import ItemList from './ItemList';
import clsx from 'clsx';
import {Fonts} from '../../../shared/constants/AppEnums';
import {grey} from '@material-ui/core/colors/index';

const Invoice2 = props => {
  const useStyles = makeStyles(theme => ({
    invoiceTable: {
      '@media (min-width: 768px)': {
        tableLayout: 'fixed',

        '& thead th': {
          whiteSpace: 'nowrap',
        },
      },
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    textSize: {
      fontSize: 18,
      [theme.breakpoints.up('lg')]: {
        fontSize: 24,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 30,
      },
    },
    [theme.breakpoints.up('lg')]: {
      invoiceTable: {
        '& > thead > tr > th, & > tbody > tr > th, & > tfoot > tr > th, & > thead > tr > td, & > tbody > tr > td, & > tfoot > tr > td': {
          padding: 24,
        },
      },
    },
    [theme.breakpoints.up('xl')]: {
      invoiceTable: {
        '& > thead > tr > th, & > tbody > tr > th, & > tfoot > tr > th, & > thead > tr > td, & > tbody > tr > td, & > tfoot > tr > td': {
          padding: 32,
        },
      },
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
    <Box flex={1}>
      <Box pt={{xl: 8}} mb={{xs: 6, lg: 8}} clone>
        <Card>
          <Header />

          <Box className={classes.tableResponsiveMaterial}>
            <ItemList classes={classes} />
          </Box>
        </Card>
      </Box>

      <Box
        mb={{xs: 3, lg: 4}}
        component='h4'
        color='grey.600'
        textAlign='center'
        fontFamily={Fonts.LIGHT}
        className={clsx(classes.textUppercase, classes.textSize)}>
        <IntlMessages id='invoice.thankYou' />
      </Box>
    </Box>
  );
};

export default Invoice2;
