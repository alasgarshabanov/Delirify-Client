import React from 'react';
import Checkbox from '@material-ui/core/Checkbox/index';
import RefreshIcon from '@material-ui/icons/Refresh';
import Tooltip from '@material-ui/core/Tooltip/index';
import {useSelector} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import {Hidden} from '@material-ui/core';
import PropTypes from 'prop-types';
import CheckedMailActions from './CheckedMailActions';
import MoreOptions from './MoreOptions';
import AppsPagination from '../../../../../@crema/core/AppsPagination';
import {grey} from '@material-ui/core/colors';

const MailContentHeader = props => {
  const {path, checkedMails, setCheckedMails, page, onPageChange} = props;

  const history = useHistory();

  const mailList = useSelector(({mailApp}) => mailApp.mailList);

  const totalMails = useSelector(({mailApp}) => mailApp.totalMails);

  const useStyles = makeStyles(theme => ({
    appHeader: {
      height: 61,
      display: 'flex',
      flexDirection: 'column',
      borderBottom: `1px solid ${grey[300]}`,
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      [theme.breakpoints.up('xl')]: {
        height: 77,
      },
    },
    checkboxRoot: {
      marginRight: 8,
    },
    pointer: {
      cursor: 'pointer',
    },
  }));

  const classes = useStyles(props);

  const onHandleMasterCheckbox = event => {
    if (event.target.checked) {
      const mailIds = mailList.map(mail => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
    }
  };

  const onRefreshPage = () => {
    history.push(path);
  };

  return (
    <Box px={5} py={{xs: 1, xl: 3}} className={classes.appHeader}>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Checkbox
          color='primary'
          className={classes.checkboxRoot}
          indeterminate={
            checkedMails.length > 0 && checkedMails.length < mailList.length
          }
          checked={
            mailList.length > 0 && checkedMails.length === mailList.length
          }
          onChange={onHandleMasterCheckbox}
        />

        {checkedMails.length > 0 ? (
          <CheckedMailActions
            checkedMails={checkedMails}
            setCheckedMails={setCheckedMails}
          />
        ) : null}

        {checkedMails.length < 1 ? (
          <Tooltip title={<IntlMessages id='common.refresh' />}>
            <Box mr={4} component='span' color='text.disabled'>
              <RefreshIcon
                className={classes.pointer}
                onClick={onRefreshPage}
              />
            </Box>
          </Tooltip>
        ) : null}

        <MoreOptions
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          path={path}
        />
      </Box>
      <Hidden xsDown>
        {mailList.length > 0 ? (
          <Box component='span' ml={{sm: 'auto'}}>
            <AppsPagination
              className={classes.pagination}
              count={totalMails}
              page={page}
              onPageChange={onPageChange}
            />
          </Box>
        ) : null}
      </Hidden>
    </Box>
  );
};

export default withRouter(MailContentHeader);

MailContentHeader.defaultProps = {
  checkedMails: [],
  page: 0,
};

MailContentHeader.prototype = {
  checkedMails: PropTypes.array,
  setCheckedMails: PropTypes.func,
  page: PropTypes.number,
  onPageChange: PropTypes.func,
};
