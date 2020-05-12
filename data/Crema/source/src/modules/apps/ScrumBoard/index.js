import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  onGetMemberList,
  onGetScrumLabelList,
} from '../../../redux/actions/ScrumboardApp';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import {useParams} from 'react-router-dom';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';

const ScrumBoard = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(onGetScrumLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetMemberList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (params.id) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return (
    <Box pt={{xl: 4}} flex={1} display='flex' flexDirection='column'>
      {onGetMainComponent()}
      <InfoView />
    </Box>
  );
};

export default ScrumBoard;
