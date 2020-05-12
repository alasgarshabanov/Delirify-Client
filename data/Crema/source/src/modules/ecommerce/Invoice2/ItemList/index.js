import React from 'react';
import clsx from 'clsx';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import TableBody from '@material-ui/core/TableBody';
import invoiceData from '../../../../@crema/services/db/extraPages/invoice/invoiceData';
import {Box, makeStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import {Fonts} from '../../../../shared/constants/AppEnums';

const ItemList = props => {
  const useStyles = makeStyles(theme => ({
    textUppercase: {
      textTransform: 'uppercase',
    },
    textBase: {
      fontSize: 16,
    },
    textLg: {
      fontSize: 18,
    },
    alignTop: {
      verticalAlign: 'top',
    },
  }));

  const classes = useStyles(props);
  return (
    <Table className={classes.invoiceTable}>
      <TableHead>
        <TableHeading />
      </TableHead>

      <TableBody>
        {invoiceData.products.map(product => {
          return <TableItem key={product.id} product={product} />;
        })}

        <TableRow>
          <TableCell colSpan='3' component='th' scope='row'>
            <Box
              color='grey.700'
              fontFamily={Fonts.BOLD}
              className={clsx(classes.textUppercase, classes.textBase)}>
              <IntlMessages id='invoice.subTotal' />
            </Box>
          </TableCell>
          <TableCell>
            <Box
              color='grey.700'
              className={clsx(classes.textUppercase, classes.textBase)}
              textAlign='right'
              fontFamily={Fonts.BOLD}>
              ${invoiceData.subTotal}
            </Box>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan='3' component='th' scope='row'>
            <Box
              color='grey.700'
              fontFamily={Fonts.BOLD}
              className={clsx(classes.textUppercase, classes.textBase)}>
              <IntlMessages id='invoice.rebate' />
            </Box>
          </TableCell>
          <TableCell>
            <Box
              color='grey.700'
              className={clsx(classes.textUppercase, classes.textBase)}
              textAlign='right'
              fontFamily={Fonts.BOLD}>
              ${invoiceData.rebate}
            </Box>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan='3' component='th' scope='row'>
            <Box
              color='grey.700'
              className={clsx(classes.textUppercase, classes.textLg)}
              fontFamily={Fonts.BOLD}>
              <IntlMessages id='invoice.grandTotal' />
            </Box>
          </TableCell>
          <TableCell>
            <Box
              color='grey.700'
              className={clsx(
                classes.textUppercase,
                classes.textLg,
                classes.alignTop,
              )}
              textAlign='right'
              fontFamily={Fonts.BOLD}>
              ${invoiceData.total}
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ItemList;
