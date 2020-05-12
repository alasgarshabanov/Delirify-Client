import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetUserList} from '../../../redux/actions/UserList';
import ListItem from './ListItem';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';

const Standard = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(({userList}) => userList.usersList);

  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);

  return (
    <Box flex={1}>
      {usersList
        ? usersList.map(user => {
            return <ListItem user={user} key={user.id} />;
          })
        : null}
      <InfoView />
    </Box>
  );
};

export default Standard;
