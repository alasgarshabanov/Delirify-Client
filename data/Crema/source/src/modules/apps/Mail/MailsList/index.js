import React, {useEffect, useState} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import List from '@material-ui/core/List';
import {useDispatch, useSelector} from 'react-redux';
import MailContentHeader from './MailContentHeader';
import Scrollbar from '@crema/core/Scrollbar';
import MailListItem from './MailListItem';
import {
  onGetMailList,
  onUpdateReadStatus,
  onUpdateStarredStatus,
} from '../../../../redux/actions';
import EmptyResult from '../../../../@crema/core/EmptyResult';
import Box from '@material-ui/core/Box';
import {Hidden} from '@material-ui/core';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

const MailsList = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const mailList = useSelector(({mailApp}) => mailApp.mailList);

  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const [page, setPage] = useState(0);

  const {pathname} = useLocation();

  const path = pathname.split('/');

  const loading = useSelector(({common}) => common.loading);

  const isShowEmptyListMessage = () => {
    return mailList.length === 0 && !loading;
  };

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    setPage(0);
    dispatch(onGetMailList(path[path.length - 2], path[path.length - 1], page));
  }, [dispatch, page, pathname]);

  const [checkedMails, setCheckedMails] = useState([]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangeCheckedMails = (event, id) => {
    if (event.target.checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter(mailId => mailId !== id));
    }
  };

  const onViewMailDetail = mail => {
    const changedMailList = [mail.id];
    dispatch(onUpdateReadStatus(changedMailList, true));
    history.push(`/apps/mail/${params.name}/${mail.id}`);
  };

  const onChangeStarred = (checked, mail) => {
    const selectedIdList = [mail.id];
    dispatch(
      onUpdateStarredStatus(selectedIdList, checked, path[path.length - 1]),
    );
  };

  const totalMails = useSelector(({mailApp}) => mailApp.totalMails);

  const useStyles = makeStyles(theme => ({
    paginationRoot: {
      paddingLeft: 8,
      paddingRight: 8,
      borderTop: '1px solid',
      borderColor: grey[300],
    },
    paddingY: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  }));

  const classes = useStyles(props);

  return (
    <>
      <MailContentHeader
        checkedMails={checkedMails}
        setCheckedMails={setCheckedMails}
        onPageChange={onPageChange}
        page={page}
        path={path}
      />

      <Scrollbar className='scroll-app'>
        {!isShowEmptyListMessage() ? (
          <List className={classes.paddingY}>
            {mailList.map(mail => {
              return (
                <MailListItem
                  key={mail.id}
                  mail={mail}
                  labelList={labelList}
                  onChangeCheckedMails={onChangeCheckedMails}
                  checkedMails={checkedMails}
                  onViewMailDetail={onViewMailDetail}
                  onChangeStarred={onChangeStarred}
                />
              );
            })}
          </List>
        ) : (
          <EmptyResult />
        )}
      </Scrollbar>
      <Hidden smUp>
        {mailList.length > 0 ? (
          <Box component='span' ml={{sm: 'auto'}}>
            <AppsPagination
              className={classes.paginationRoot}
              count={totalMails}
              page={page}
              onPageChange={onPageChange}
            />
          </Box>
        ) : null}
      </Hidden>
    </>
  );
};

export default MailsList;
