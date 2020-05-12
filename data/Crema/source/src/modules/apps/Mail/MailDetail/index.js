import React, {useEffect} from 'react';
import MailDetailHeader from './MailDetailHeader';
import Scrollbar from '@crema/core/Scrollbar';
import MailDetailBody from './MailDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {onGetSelectedMail, onNullifyMail} from '../../../../redux/actions';
import {useHistory, useParams} from 'react-router-dom';

const MailDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {id} = useParams();
  const selectedMail = useSelector(({mailApp}) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, id]);

  return (
    <>
      {selectedMail ? (
        <>
          <MailDetailHeader history={history} selectedMail={selectedMail} />
          <Scrollbar className='scroll-app-detail'>
            <MailDetailBody selectedMail={selectedMail} history={history} />
          </Scrollbar>
        </>
      ) : null}
    </>
  );
};

export default MailDetail;
